const axios = require("axios");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });
// api key : FOOD_API_KEY

module.exports = {
  get: (req, res) => {
    let { nutrient } = req.query;
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.FOOD_API_KEY}&sort=${nutrient}&number=1`
      )
      .then((response) => {
        let resultObj = {
          title: response.data.results[0].title,
          image: response.data.results[0].image,
        };
        res.send(resultObj);
      });
  },
};
