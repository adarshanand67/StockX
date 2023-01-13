// Express app
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000 || process.env.PORT;

// use dotenv
dotenv.config();
// use morgan
app.use(morgan("dev"));
// use json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Listen to requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
