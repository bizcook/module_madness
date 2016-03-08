var convertDollars = function(intNum) {
    return '$' + (intNum + '').replace(/(\d)(?=(\d{3})+$)/g, '$1,') + ".00";
};
module.exports = convertDollars;
