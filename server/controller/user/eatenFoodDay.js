const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");

module.exports = {
  post: (req, res) => {
    if (!req.session.userid) {
      return res.status(403).send("forbidden");
    }
    const id = req.session.userid;
    const age = req.session.userage;
    const gender = req.session.gender;
    const { date } = req.body;
    const startDay = date + "T00:00:00Z";
    const endDay = date + "T23:59:59Z";
    Food_users.findAll({
      where: {
        UserId: id,
        time: {
          [Op.between]: [startDay, endDay],
        },
      },
      include: [
        {
          model: Foods,
          required: true,
        },
      ],
    })
      .then((result) => {
        const eatenFood = [];
        result.forEach((food) => {
          eatenFood.push({
            Food: food.Food.food_name,
            Servings: food.amount,
            Calories: food.Food.calories * food.amount,
          });
        });
        res.send(eatenFood);
      })
      .catch((err) => res.send(err));
  },
};
