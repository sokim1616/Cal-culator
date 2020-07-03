const express = require("express");
const router = express.Router();

const { foodController } = require("../controller");

// * POST /foodinfo
router.post("/foodinfo", foodController.food_info.post);

// * POST /addfooduser
router.post("/addfooduser", foodController.add_food_user.post);

module.exports = router;
