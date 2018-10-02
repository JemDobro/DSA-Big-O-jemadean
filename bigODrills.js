'use strict';

//EVEN OR ODD
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}
//Constant time O(1) --no matter the input value, this takes the same amount of time to complete as there is only one arithmetic operation