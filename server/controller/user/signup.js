const { Users } = require("../../model");

module.exports = {
  post: (req, res) => {
    const { username, email, password, gender, age } = req.body;

    Users.findOrCreate({
      where: {
        email,
      },
      defaults: {
        username,
        password,
        gender,
        age,
      },
    }).then(async ([user, created]) => {
      if (!created) {
        return res.status(409).send("user already exists!");
      }
      const data = await user.get({ plain: true });
      res.status(200).json(data);
    });
  },
};

/**
 *
 * for creating foods
 *
 */
// const { Foods } = require("../../model");

// module.exports = {
//   post: (req, res) => {
//     const {
//       food_name,
//       calories,
//       fat,
//       carbohydrates,
//       sugar,
//       protein,
//       sodium,
//       cholesterol,
//       iron,
//       calcium,
//       vitamin_A,
//       vitamin_D,
//       zinc,
//     } = req.body;

//     Foods.findOrCreate({
//       where: {
//         food_name,
//       },
//       defaults: {
//         calories,
//         fat,
//         carbohydrates,
//         sugar,
//         protein,
//         sodium,
//         cholesterol,
//         iron,
//         calcium,
//         vitamin_A,
//         vitamin_D,
//         zinc,
//       },
//     }).then(async ([food, created]) => {
//       if (!created) {
//         return res.status(409).send("food already exists!");
//       }
//       const data = await food.get({ plain: true });
//       res.status(200).json(data);
//     });
//   },
// };

/**
 *
 * For createing food_user
 *
 */
// const { Food_users } = require("../../model");

// module.exports = {
//   post: (req, res) => {
//     const { amount, time, UserId, FoodId } = req.body;

//     Food_users.create({
//       amount,
//       time,
//       UserId,
//       FoodId,
//     })
//       .then(() => {
//         res.send("successfully created!");
//       })
//       .catch((err) => res.send(err));
//   },
// };
