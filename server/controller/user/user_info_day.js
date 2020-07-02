const { Food_user } = require("../../model");
const { Foods } = require("../../model");

module.exports = {
  get: (req, res) => {
    // const id = req.session.userid;
    // const { day } = req.body;
    Food_user.findAll({
      where: {
        UserId: 1,
        time: "2020-07-01T15:00:00.000Z",
      },
      include: [
        {
          model: Foods,
          required: true,
        },
      ],
    }).then((result) => {
      res.send(result);
    });
  },
};
