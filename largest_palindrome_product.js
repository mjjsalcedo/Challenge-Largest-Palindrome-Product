/*jshint esversion: 6 */

/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
  module.exports = (function(){
    var factor_0 = 0;
    var factor_1 = 0;
    var palindromeNumber = 0;
  // do your work here

     return function findPalindromeProduct(digits){
      for (var i = digits; i <= 99; i++) {
        for (var j = 0; j <= 99; j++){
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
