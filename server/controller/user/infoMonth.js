const { Food_users } = require("../../model");
const { Foods } = require("../../model");
const { Op } = require("sequelize");
const getLastDayOfMonth = require("../helperFunction/getLastDayOfMonth");
const formatDay = require("../helperFunction/formatDay");
const makeDateObj = require("../helperFunction/makeDateObj");

module.exports = {
  post: (req, res) => {
    if (!req.session.userid) {
      return res.status(403).send("forbidden");
    }
    const id = req.session.userid;
    const { date } = req.body;
    const year = date.slice(0, 4);
    const month = date.slice(5);
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
      order: [["time", "ASC"]],
    })
      .then((result) => {
        const dateCalorieObj = makeDateObj(`${year}-${month}-01`, lastDay);
        result.forEach((dateObj) => {
          const dateStr = formatDay(dateObj.time);
          dateCalorieObj[dateStr]
            ? (dateCalorieObj[dateStr] +=
                dateObj.Food.calories * dateObj.amount)
            : (dateCalorieObj[dateStr] =
                dateObj.Food.calories * dateObj.amount);
        });
        res.send(dateCalorieObj);
      })
      .catch((err) => res.send(err));
  },
};
