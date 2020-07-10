const axios = require("axios");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });
// api key : FOOD_API_KEY

module.exports = {
  get: (req, res) => {
    let { query } = req.query;
    try {
      axios
        .get(
          `https://api.spoonacular.com/recipes/autocomplete?number=5&query=${query}&apiKey=${process.env.FOOD_API_KEY}`
        )
        .then((response) => {
          res.send(response.data);
        });
    } catch (err) {
      res.send(err);
    }
  },
};
