module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: "cal_culator",
    host: "localhost",
    dialect: "mysql",
    logging: false,
  },
  deployment: {
    username: "admin",
    password: process.env.DEPLOY_PASSWORD,
    database: "cal_culator",
    host: "cal-culator-database.c5f7ymdkzjkq.ap-northeast-2.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
  },
};
