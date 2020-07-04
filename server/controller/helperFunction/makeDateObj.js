const formatDay = require("./formatDay");

module.exports = function (startDate, days) {
  let count = 1;
  let returnObj = {};
  let date = new Date(startDate);
  while (count <= days) {
    count++;
    let currentDate = formatDay(date);
    returnObj[currentDate] = 0;
    date.setDate(date.getDate() + 1);
  }
  return returnObj;
};
