const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");
const recommendedDaily = require("../helperFunction/recommendedDaily");

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
        // time constraints exist!
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
    }).then((result) => {
      let [
        calories,
        fat,
        carbohydrates,
        sugar,
        protein,
        sodium,
        cholesterol,
        iron,
        calcium,
        vitamin_A,
        vitamin_D,
        zinc,
      ] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      result.forEach((food) => {
        calories += food.Food.calories;
        fat += food.Food.fat;
        carbohydrates += food.Food.carbohydrates;
        sugar += food.Food.sugar;
        protein += food.Food.protein;
        sodium += food.Food.sodium;
        cholesterol += food.Food.cholesterol;
        iron += food.Food.iron;
        calcium += food.Food.calcium;
        vitamin_A += food.Food.vitamin_A;
        vitamin_D += food.Food.vitamin_D;
        zinc += food.Food.zinc;
      });

      // TODO: percentage for each nutrients
      const recommendedNutrition = recommendedDaily(age, gender);

      res.send({
        calories: +((calories / recommendedNutrition.calories) * 100).toFixed(),
        fat: +((fat / recommendedNutrition.fat) * 100).toFixed(),
        carbohydrates: +(
          (carbohydrates / recommendedNutrition.carbohydrate) *
          100
        ).toFixed(),
        sugar: +((sugar / recommendedNutrition.sugar) * 100).toFixed(),
        protein: +((protein / recommendedNutrition.protein) * 100).toFixed(),
        sodium: +((sodium / recommendedNutrition.sodium) * 100).toFixed(),
        cholesterol: +(
          (cholesterol / recommendedNutrition.cholesterol) *
          100
        ).toFixed(),
        iron: +((iron / recommendedNutrition.iron) * 100).toFixed(),
        calcium: +((calcium / recommendedNutrition.calcium) * 100).toFixed(),
        vitamin_A: +(
          (vitamin_A / recommendedNutrition.vitamin_A) *
          100
        ).toFixed(),
        vitamin_D: +(
          (vitamin_D / recommendedNutrition.vitamin_D) *
          100
        ).toFixed(),
        zinc: +((zinc / recommendedNutrition.zinc) * 100).toFixed(),
      });
    });
  },
};
