import moment from "moment";
import _ from "lodash";

//Print Date or Time in the following format:

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));
console.log(moment().format("MMM Do YY"));

//Check if the following date is valid or not:

console.log(moment().isValid("2020-01-01"));
console.log(moment().isValid("2020-14-01"));

//Manipulating Dates

console.log(moment().add(7, "d"));
console.log(moment().add(7, "M"));
console.log(moment().add(7, "y"));
console.log(moment().subtract(7, "d"));
console.log(moment().subtract(7, "M"));
console.log(moment().subtract(7, "y"));

// Find the difference between the following 2 dates:

var a = moment([2014, 11, 11]);
var b = moment([2015, 9, 11]);
console.log(a.diff(b));

var date1 = moment([2014, 11, 27]);
var date2 = moment([2015, 9, 16]);
console.log(date1.diff(date2));

//Use lodash to do the following things:
// Use five methods form the list of Array methods and five from Collection methods

console.log(_.chunk(["a", "b", "c", "d"], 2));

// concat

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);

// difference

console.log(_.difference([2, 1], [2, 3]));

// drop

console.log(_.drop([1, 2, 3], 2));

// fill

var array = [1, 2, 3];

_.fill(array, "a");
console.log(array);

// collection
// every

console.log(_.every([true, 1, null, "yes"], Boolean));

// filter

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];
console.log(
  _.filter(users, function (o) {
    return !o.active;
  })
);

// find

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

console.log(
  _.find(users, function (o) {
    return o.age < 40;
  })
);
