const router = require("express").Router();
const { userController } = require("../controller");

router.post("/signup", userController.signup.post);

router.post("/signin", userController.signin.post);

router.post("/signout", userController.signout.post);

router.get("/infoDay", userController.user_info_day.post);

// router.get("/infoWeek", userController.user_info_week.get);

// router.get("/infoMonth", userController.user_info_month.get);

module.exports = router;
