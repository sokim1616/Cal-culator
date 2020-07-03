const { Food_user } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");
module.exports = {
  post: (req, res) => {
    const id = req.session.userid;
    const { day } = req.body;
    // if the day is in the format of 2020-07-01
    // const startDay = day + "T00:00:00Z";
    // const endDay = day + "T23:59:59Z";
    // if the day is in the format of Date()
    const formattedDay = `${day.getFullYear()}-${
      day.getMonth() + 1 > 9 ? day.getMonth() + 1 : "0" + (day.getMonth() + 1)
    }-${day.getDate() > 9 ? day.getDate() : "0" + day.getDate()}`;
    const startDay = formattedDay + "T00:00:00Z";
    const endDay = formattedDay + "T23:59:59Z";
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
