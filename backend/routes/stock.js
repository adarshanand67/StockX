const express = require("express");
const {
    stockByTicker,
    allStocks,
    getStock,
} = require("../controllers/stock");
const { requireSignin } = require("../controllers/user");

const router = express.Router();

router.get("/stocks", allStocks);
router.get("/stocks/:stockTicker", getStock);

// router.param("stockTicker", stockByTicker);

module.exports = router;