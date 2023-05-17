const new_date = (days) => {
  const addDays = require("date-fns/addDays");
  let trueDate = addDays(new Date(2020, 7, 22), days);
  let day = trueDate.getDate();
  let month = trueDate.getMonth() + 1;
  let year = trueDate.getFullYear();
  return `${day}-${month}-${year}`;
};
console.log(new_date(10));

module.exports = new_date;
