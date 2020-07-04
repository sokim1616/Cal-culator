const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");
const getLastDayOfMonth = require("../helperFunction/getLastDayOfMonth");

module.exports = {
  post: (req, res) => {
    if (!req.session.userid) {
      return res.status(403).send("forbidden");
    }
    const id = req.session.userid;
    const { date } = req.body;
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const lastDay = getLastDayOfMonth(month, year);
    const startDay = `${year}-${month}-01` + "T00:00:00Z";
    const endDay = `${year}-${month}-${lastDay}` + "T23:59:59Z";
    Food_users.findAll({
      where: {
        UserId: id,
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
