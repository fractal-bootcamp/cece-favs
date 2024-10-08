// Import the PrismaClient from the @prisma/client package
// This client allows us to interact with our database
import { PrismaClient } from "@prisma/client";
// Import data
import { pictureData, type PictureData } from "./pictureData";

//create new PrismaClient
const prisma = new PrismaClient();

//define main insertPicture function
async function insertPicture(data: PictureData) {
  try {
    //upsert location  --> combination of update&insert
    //log new params of a picture when defined in pictureData
    const location = await prisma.location.upsert({
      where: { name: data.location },
      update: {},
      create: { name: data.location },
    });
    //upsert(update&insert) genre
    //promise.all to perform concurrently
    const genres = await Promise.all(
      data.genres.map((genreName) =>
        prisma.genres.upsert({
          where: { name: genreName }, //look for genre with this name
          update: {}, //if found- do nothing
          create: { name: genreName }, //if not found -> create
        })
      )
    );
    //upsert(update&insert) tags
    const tags = await Promise.all(
      data.tags.map((tagName) =>
        prisma.tag.upsert({
          where: { name: tagName },
          update: {},
          create: { name: tagName },
        })
      )
    );

    //CREATE method:
    const picture = await prisma.picture.create({
      //create new .picture record in db --> inside create : data & include
      data: {
        //pass through all the params of picture type
        title: data.title,
        date: data.date,
        imageUrl: data.imageUrl,
        description: data.description,
        // location is (1-n) : connect with a single object(Picture)
        location: { connect: { id: location.id } }, //connecting new picture to an existing location
        // genre is (n-m) : here we create a map to create array of objects - each with an Id --> potential to connect to multiple
        genres: { connect: genres.map((g) => ({ id: g.id })) }, //connect picture to multiple Genres
        //maps over genres array and creates an array of objects
        tags: { connect: tags.map((t) => ({ id: t.id })) }, //repeat for tags
        // CONNECT --> used to establish relationships
      },
      include: {
        //include the related items in the returned picture object
        location: true,
        genres: true,
        tags: true,
      },
    });
    /* So, in summary, this code is:

    1) Creating a new Picture record with the provided title, date, imageUrl, and description.
    2) Connecting this Picture to an existing Location.
    3) Connecting this Picture to multiple existing Genres.
    4) Connecting this Picture to multiple existing Tags.
    5) Telling Prisma to include all of these related entities when it returns the newly created Picture object.*/

    return picture;
  } catch (error) {
    console.log("Error boo *sigh", error);
    throw error;
  }
}

//insert each picture from data set
async function main() {
  // loop through each pic data object in pictureData array and call insertPicture function --> if successful -> log title
  for (const picDataLoop of pictureData) {
    try {
      // this try catch ensures if one pic fails to insert -> script continues with next pic rather than stopping
      const insertedPicture = await insertPicture(picDataLoop);
      console.log("picture was inserted", insertedPicture.title);
    } catch (error) {
      console.error("failed to insert", picDataLoop.title, error);
    }
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => prisma.$disconnect()); //returns a promise - so we need to async
/* .finally(async () => prisma.$disconnect()): This ensures that no matter what happens (success or error), 
  the Prisma client disconnects from the database when the script is done. 
  This is important for properly closing the database connection. */
