/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  var threes = 0;
  var fives = 0;
  
  for(i=1; i<n; i++){
    if(i%3===0){
      threes += i;
    }
    else if(i%5===0){
      fives += i;    
    }
   
    sum = threes+fives;
    
  }
  
  return sum;
  
};
