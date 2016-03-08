var convertDollars = require("./convertDollars");
var randomNumber = require("./randomNumber");

var balanceString = function(){
  return "Account Balance: \n";
}

var accountBalance = function(){
  var number = randomNumber();
  var dollars = convertDollars(number);
  return  dollars;
  // return "testing";
};

module.exports.balance = accountBalance;
module.exports.string = balanceString;
