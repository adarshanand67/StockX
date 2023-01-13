// const fs = require("fs");
// const papa = require("papaparse");

import fs from "fs";
import papa from "papaparse";

const dataFolder = "./src/data";

fs.readdir(dataFolder, (err, files) => {
  files.forEach((file) => {
    // console.log(file);
    fs.readFile(`${dataFolder}/${file}`, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // Parsing the csv file to json file
      const json = papa.parse(data, {
        header: true,
      }).data;
      // console.log(json);
      const fileName = file.split(".")[0];
      // console.log(fileName);
      // Write file in the json folder

      fs.mkdir(`${dataFolder}/json`, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("Folder has been created");
      });

      const jsonFile = `${dataFolder}/json/${fileName}.json`;

      fs.writeFile(jsonFile, JSON.stringify(json), (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("File has been created");
      });

    });
  });
});
