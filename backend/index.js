const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const port = process.env.PORT || 8081;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

app.use("/", authRoutes);
app.use("/", userRoutes);

// api docs
app.use("/", (req, res) => {
  fs.readFile("docs/apiDocs.json", (err, data) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    res.json(JSON.parse(data));
  });
});

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: "Unauthorised!" });
  } else {
    next(err);
  }
});

dotenv.config();

// MongoDB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("DB Connected"));

mongoose.connection.on("error", (err) =>
  console.log(`DB connection error: ${err.message}`)
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const csv = require('fast-csv');
// const fs = require('fs');
// remove all entries of stock from mongodb
const Stock = require('./model/stock');

Stock.deleteMany({}, (err) => {
	if (err) {
		console.error(err);
	}
});

// for every file in the data folder
// create a fs read stream and save document to database

for (const file of fs.readdirSync('data')) {
	// Create a new stream for each file
	fs.createReadStream(`data/${file}`)
		.pipe(csv.parse({ headers: true }))
		.on('data', (row) => {
			// Create a new document with the data from the CSV file
			const document = new Stock(row);
			// Add name field to the document
			document.name = file.split('.')[0];
			// Save the document to the collection
			document.save((err) => {
				if (err) {
					console.error(err);
				}
			});
		});
}

