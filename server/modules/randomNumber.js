var randomNumber = function () {
    var number = Math.floor(Math.random() * (1 + 1000000 - 100) + 100);
    return parseInt(number);
};
module.exports = randomNumber;
