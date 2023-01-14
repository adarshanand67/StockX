const _ = require("lodash"); 
const Stock = require("../model/stock");

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