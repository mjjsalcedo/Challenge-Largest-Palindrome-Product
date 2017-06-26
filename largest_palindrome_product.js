/*jshint esversion: 6 */

/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
 var hello = (function(){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  // do your work here


    var findPalindromeProduct = function (){
    for (var i = 10; i <= 99; i++) {
      factor_0 = i;
      for (var j = 10; j <= 99; j++){
      factor_1 = j;
      combo = factor_0 * factor_1;
        if (checkIfPalindrome(combo) === true){
        }
      }
    }
          return palindromeNumber;

    };

    function checkIfPalindrome(num){
      let stringPal = num.toString();
      let revPal =stringPal.split("");
      revPal = revPal.reverse();
      revPal =revPal.join("");

      if (revPal === stringPal) {
          palindromeNumber = revPal;
          return true;
      } else {
        return false;
      }

    }

return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : findPalindromeProduct,
  };

})();


console.log(hello.palindromeNumber());
console.log(hello.factor_0);
  module.exports = hello;
