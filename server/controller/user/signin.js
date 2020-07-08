const { Users } = require("../../model");

module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    const sess = req.session;

    Users.findOne({
      where: {
        email,
        password,
      },
    }).then((result) => {
      if (!result) {
        return res.send("invalid");
      }
      sess.userid = result.id;
      sess.userage = result.age;
      sess.gender = result.gender;
      res.send("ok");
    });
  },
};
