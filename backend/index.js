// Express app
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
// import apiRoutes from "./routes/api.js";

// use dotenv
dotenv.config();
const app = express();
const PORT = process.env.PORT;

// use morgan
app.use(morgan("dev"));
// use json to parse request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
// app.use("/api", apiRoutes);

// Listen to requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
