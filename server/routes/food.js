const express = require("express");
const router = express.Router();

const { foodController } = require("../controller");

// * POST /foodinfo
router.post("/foodinfo", foodController.food_info.post);

module.exports = router;
