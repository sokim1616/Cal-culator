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
    })
      .then(async ([user, created]) => {
        if (!created) {
          return res.send("conflict");
        }
        const data = await user.get({ plain: true });
        res.status(200).json(data);
      })
      .catch((err) => res.send(err));
  },
};
