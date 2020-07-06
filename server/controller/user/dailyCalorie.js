const recommendedDaily = require("../helperFunction/recommendedDaily");

module.exports = {
  get: (req, res) => {
    // if (!req.session.userid) {
    //   return res.status(403).send("forbidden");
    // }
    const [id, age, gender] = [1, 27, "Male"];
    // const id = req.session.userid;
    // const age = req.session.userage;
    // const gender = req.session.gender;

    const recommendedNutrition = recommendedDaily(age, gender);
    res.send(String(recommendedNutrition.calories));
  },
};
