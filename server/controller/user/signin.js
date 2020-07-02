const { User } = require("../../model");

module.exports = {
  post: (req, res) => {
    const { email, password } = req.body;
    const sess = req.session;

    User.findOne({
      where: {
        email,
        password,
      },
    }).then((result) => {
      if (!result) {
        return res.status(404).send("invalid email or password");
      }
      sess.userid = result.id;
      console.log(req.session.userid);
      res.status(200).json({
        id: result.id,
      });
    });
  },
};
