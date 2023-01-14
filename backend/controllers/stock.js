const _ = require("lodash"); 
const Stock = require("../model/stock");


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
