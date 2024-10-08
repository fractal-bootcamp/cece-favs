import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//For env File
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//use cors
app.use(cors());

//parse JSON
app.use(express.json());

//test API endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

console.log("i still think youare smart");
