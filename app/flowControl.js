if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      var ret = null;

      if (num % 15 === 0) {
        ret = 'fizzbuzz';
      } else if (num % 5 === 0) {
        ret = 'buzz';
      } else if (num % 3 === 0) {
        ret = 'fizz';
      }

      // If the input of parseInt is not a number it will return NaN
      // so this trick works.
      return ret || parseInt(num) || false;
    }
  };
});
