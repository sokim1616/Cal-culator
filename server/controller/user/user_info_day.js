const { Food_user } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");
module.exports = {
  post: (req, res) => {
    const id = req.session.userid;
    const { day } = req.body;
    const startDay = day + "T00:00:00Z";
    const endDay = day + "T23:59:59Z";
    Food_user.findAll({
      where: {
        UserId: 1,
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
      res.send(result);
    });
  },
};
