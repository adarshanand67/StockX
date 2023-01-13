// Express app
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
// import apiRoutes from "./routes/api.js";

// use dotenv
dotenv.config();
const app = express();
const PORT = 3000 || process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// Add this in .env
// PORT=3000
// MONGO_URI=mongodb+srv://flipr:flipr@cluster0.8d8eto9.mongodb.net/?retryWrites=true&w=majority

// use morgan
app.use(morgan("dev"));
// use json to parse request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
// app.use("/api", apiRoutes);

// Connect to MongoDB and start server
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
