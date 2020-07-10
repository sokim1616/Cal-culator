const express = require("express");
const router = express.Router();

const { foodController } = require("../controller");

// * GET /foodtrivia
router.get("/foodtrivia", foodController.food_trivia.get);

// * POST /foodinfo
router.post("/foodinfo", foodController.food_info.post);

// * POST /addfooduser
router.post("/addfooduser", foodController.add_food_user.post);

// * GET /findmaxnutrient, finds max nutrient of that day
router.get("/findmaxnutrient", foodController.find_max_nutrient.get);

// * GET /foodautocomplete, for autocompletion
router.get("/foodautocomplete", foodController.food_autocomplete.get);

module.exports = router;
