/*jshint esversion: 6 */
/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
 function hello(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  /*function factor0(digits){
    if(digits <10 || digits >99){
      return;
    } else {
      factor_0 = digits;
    }

    return factor_0;
  }

  function factor1(digits){
  if(digits <10 || digits >99){
      return;
    } else {
      factor_1 = digits;
    }

    return factor_1;
  }*/

  function paliNumber(){
    let sample = factor_0 * factor_1;
    let test = sample;
    let reversed = 0;

    function reverse(sample){
      sample = sample + "";
      sample.split("").reverse().join("");
      reversed = sample;
      if(test !== reversed){
        return;
      } else {
        palindromeNumber = sample;
      }
    }

    return palindromeNumber;
  }

  //this is where code starts
 /* factor_0 = function(digits);
  factor_0 = function(digits);*/
  //invoke a function;

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};

module.exports = hello;