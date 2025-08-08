const {format, addDays, subDays} = require("date-fns");

const now = new Date();
console.log("Today is: ", format(now, "yyyy-MM-dd"));

const nextWeek = addDays(now, 7);
console.log("Next week is: ", format(nextWeek, "yyyy-MM-dd"));

const previousWeek = subDays(now, 7);
console.log("previous week is: ", format(previousWeek, "yyyy-MM-dd"));