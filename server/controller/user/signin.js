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
        console.log('로그인실패')
        return res.send("invalid");
      }
      console.log('로그인성공')
      console.log(result)
      sess.userid = result.id;
      sess.userage = result.age;
      sess.gender = result.gender;
      res.status(200).json({
        id: result.id,
      });
    });
  },
};
