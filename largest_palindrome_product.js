/*jshint esversion: 6 */

/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
  module.exports = (function(digits){
    var factor_0 = 0;
    var factor_1 = 0;
    var palindromeNumber = 0;
  // do your work here
  var cap;
  var max = function (digits){
  if (digits > 99) {
        cap = 1000;
      }

  if (digits < 100) {
        cap = 99;
      }
    };

     return function findPalindromeProduct(digits){

      for (var i = digits; i <= cap; i++) {
        for (var j = digits; j <= cap; j++){
        let combo = i * j;
        let stringPal = combo.toString();
        let revPal =stringPal.split("").reverse().join("");

          if (revPal === stringPal){
            factor_0 = i;
            factor_1 = j;
            palindromeNumber = combo;
        }
     }
  }
    return {
        factor_0 : factor_0,
        factor_1 : factor_1,
        palindromeNumber : palindromeNumber,
  };
};

})();
