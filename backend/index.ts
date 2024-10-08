import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import path from "path";

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

//after setting up CORS and JSON parsing --but before defining any routes -> add path to images
const imagePath = path.join(__dirname, "./assets");
console.log("============__________IS THIS THING ON?_____________===========");
console.log(imagePath);
app.use("/images", express.static(imagePath, { index: false }));

//test API endpoint
app.get("/images", (req, res) => {
  res.send(
    "Image directory. Use /images/[filename] to access specific images."
  );
});

//GET request to create endpoint to query picture data
app.get("/api/pictures/search", async (req, res) => {
  try {
    //destructure request query and assign the value to q
    const { query } = req.query;
    // explicitly chek query is a string
    const searchQuery = typeof query === "string" ? query : "";
    console.log("finding pictures for query: ", searchQuery);
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

    console.log(`we have found ${pictures.length} pictures..`);
    if (pictures.length > 0) {
      console.log("ur first image:", JSON.stringify(pictures[0], null, 2));
    }

    //send pictures of object back to the client as JSON
    res.json(pictures);
  } catch (error) {
    console.error("no pictures for you!", error);
    res.status(500).json({ error: "ERROOoooooOOOOr" });
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
