const { User } = require("../../model");

module.exports = {
  post: (req, res) => {
    const { username, email, password, gender, height, weight } = req.body;

    User.findOrCreate({
      where: {
        email,
      },
      defaults: {
        username,
        password,
        gender,
        height,
        weight,
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
