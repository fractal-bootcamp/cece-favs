import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//initialize Prisma Client
const prisma = new PrismaClient();

//use cors
app.use(cors());

//parse JSON
app.use(express.json());

//test API endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Express & TypeScript Server");
});

//GET request to create endpoint to query picture data
app.get("/api/pictures/search", async (req, res) => {
  try {
    //destructure request query and assign the value to q
    const { q } = req.query;
    // explicitly chek query is a string
    const searchQuery = typeof q === "string" ? q : "";
    // call prisma database and store related pictures in variable as an object
    const pictures = await prisma.picture.findMany({
      where: {
        //filter based on certain conditions
        //"find many pictures where any of the following conditions are true..."
        //OR used to combine multiple conditions --> any of conditions can be true for record to be included
        OR: [
          //"Find pictures WHERE searchQuery is found in the title OR description OR location OR genre OR tag"
          { title: { contains: searchQuery, mode: "insensitive" } },
          //insensitive means the search will match results regardless of upper or lowercase lettering --more userfriendly and forgiving
          { description: { contains: searchQuery, mode: "insensitive" } },
          //search name field in related Loaction table for each picture
          {
            location: { name: { contains: searchQuery, mode: "insensitive" } },
          }, //directly access the name field of the related location table -- bc (1-1) relationship here
          //search name field in related Genre table for each picture
          {
            genres: {
              some: { name: { contains: searchQuery, mode: "insensitive" } },
            }, // SOME --> (n-m) at least one related record meeting certain conditions
          },
          //search name field in related Tags table for each picture
          {
            tags: {
              some: { name: { contains: searchQuery, mode: "insensitive" } },
            }, //if any (some) of these tags have a name that contains search query - include them in result
          }, //other operator search queries : Every (all related records must match) ; None (no records should match)
        ],
      },
      //return all info from the related location, genres, and tags tables
      include: {
        location: true,
        genres: true,
        tags: true,
      },
      take: 20, //limit results to 20 pictures
    });

    console.log("return picture objecy:", pictures, typeof pictures);

    //send pictures of object back to the client as JSON
    res.json(pictures);
  } catch (error) {
    console.error("error searching pictures:", error);
    res.status(500).json({ error: "An error occured while searching photos" });
  }
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

// Gracefully shut down the Prisma client when the server closes
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit();
});

console.log("i still think youare smart");
