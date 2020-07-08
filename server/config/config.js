module.exports = {
  development: {
    username: "admin",
    password: process.env.PASSWORD,
    database: "cal_culator",
    host: "cal-culator-database.c5f7ymdkzjkq.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
};
