const _ = require("lodash"); 
const Stock = require("../model/stock");
const csv = require('fast-csv');
const fs = require('fs');


// filter stocks by ticker and return the list of stocks
exports.getStock = (req, res) => {
    console.log("Request parameters " + req.params.stockTicker)
    Stock.find({name: req.params.stockTicker}, (err, stocks) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.json(stocks)
        // return stocks;
        // res.json(stocks);
    })
};


exports.allStocks = (req, res) => {
    Stock.find((err, stocks) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.json(stocks);
    })
    
};

exports.updateStocks = (req, res) => {
    Stock.deleteMany({}, (err) => {
        if (err) {
            console.error(err);
        }
    });


    for (const file of fs.readdirSync('data/')) {
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

    res.json("Stocks updated");

}
