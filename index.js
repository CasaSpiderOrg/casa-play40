module.exports = {
    throwTheDice: function (maxNumber) {
        let dice = Math.ceil(Math.random() * maxNumber);
        return dice;
    },
    wafWoef: function () {
        return ('Waf! Woef!');
    }
};