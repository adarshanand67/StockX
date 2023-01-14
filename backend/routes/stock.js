const express = require("express");
// const {
//     userById,
//     allUsers,
//     getUser,
//     updateUser,
//     deleteUser,
// } = require("../controllers/user");
const { allStocks } = require("../controllers/stock");
const { requireSignin } = require("../controllers/user");

const router = express.Router();

router.get("/stocks", allStocks);
// router.get("/user/:userId", requireSignin, getUser);
// router.put("/user/:userId", requireSignin, updateUser);
// router.delete("/user/:userId", requireSignin, deleteUser);

// router.param("userId", userById);

module.exports = router;