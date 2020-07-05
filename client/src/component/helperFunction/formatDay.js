module.exports = function formatDay(dateObj) {
  return `${dateObj.getFullYear()}-${
    dateObj.getMonth() >= 9
      ? dateObj.getMonth() + 1
      : "0" + (dateObj.getMonth() + 1)
  }-${dateObj.getDate() > 9 ? dateObj.getDate() : "0" + dateObj.getDate()}`;
};
