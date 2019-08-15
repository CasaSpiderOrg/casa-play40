module.exports = {
    throwTheDice: function (maxNumber) {
        let dice = Math.floor(Math.random() * maxNumber + 1);
        return dice;
    },
    wafWoef: function () {
        return ('Waf! Woef!');
    }
};