var convertDollars = require("./convertDollars");
var randomNumber = require("./randomNumber");

var accountBalance = function(){
  var number = randomNumber();
  var dollars = convertDollars(number);


  return "Account Balance: \n" + dollars;
  // return "testing";
};

module.exports = accountBalance;
