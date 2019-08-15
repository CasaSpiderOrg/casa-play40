var MyMethods = require('.');
var throwTheDice = MyMethods.throwTheDice;
var wafwoef = MyMethods.wafWoef;

let dice = throwTheDice(5);
console.log('throw: ' + dice);
console.log(wafwoef());
