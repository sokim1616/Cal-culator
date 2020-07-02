const { Food_user } = require("../../model");

module.exports = {
  get: (req, res) => {
    const id = req.session.id;
    res.send(id);
    // const { username, email, password, gender, height, weight } = req.body;

    // Food_user.findAll({
    //   where: {
    //     email,
    //   },
    //   defaults: {
    //     username,
    //     password,
    //     gender,
    //     height,
    //     weight,
    //   },
    // }).then(async ([user, created]) => {
    //   if (!created) {
    //     return res.status(409).send("user already exists!");
    //   }
    //   const data = await user.get({ plain: true });
    //   res.status(200).json(data);
    // });
  },
};
