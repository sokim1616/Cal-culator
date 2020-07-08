const { Food_users } = require("../../model");
module.exports = {
  post: async (req, res) => {
    const id = req.session.userid;
    const { food_info } = req.body;
    /* 배열에 담긴 객체
    [
        {
            amount: 100,
            date: 2020-07-01,
            UserId: 1,
            FoodId: 1
        },
        {
            amount: 200,
            date: 2020-07-02,
            UserId: 1,
            FoodId: 1
        }
    ]
    */
    if (food_info.length === 0) {
      res.send("init response");
    } else {
      for await (let i of food_info) {
        Food_users.create({
          amount: i.amount,
          time: i.date,
          UserId: id,
          FoodId: i.FoodId,
        });
      }
      console.log(req.body.food_info);
      res.send("success");
    }
  },
};
