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

//ARE YOU HERE?
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {  //for loop  constant time O(1) is out
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {  //nested for loop, polynomial time O(n^k)
      const el2 = arr2[j];
      if (el1 === el2) return true;  //constant time O(1)
    }
  }
  return false;
}
//Looking at algorithm to see what it does: Loops through array 1, taking one item of arr1 at a time and loops through arr 2 comparing that item from arr1 to every item in arr2 to see if a matching item is found. If a matching item is found, it returns true, otherwise false. arr1 will be looped through once, while arr2 will be looped through multiple times.  
//Polynomial time O(n^2) -- requires 2 levels of looping over an input

//DOUBLER
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}
//This algorithm loops through each item in the array and multiplies it by 2.  
//Linear time O(n) - does one arithmetic operation at a time to each item in the array.  If the array gets larger, time needed will increase proportionately.

//NAIVE SEARCH
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
//Loops through the array looking for a matching item. If found, returns the index of that item.
////Linear time O(n) - looks one item at a time, may or may not have to search through whole array.  If the array gets larger, time needed may increase proportionally.

//CREATING PAIRS
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ", " +  arr[j] );
    }
  }
}
//Loops through array, starts at one item for i, starts at next item for j. 1 item for i will get printed for all other items as j (nested loop), before moving ont next item for i (just like nested loop in ARE YOU HERE?)  Prints "i, j", "i, j+1", "i, j+2",etc...  
// Polynomial time O(n^2)

//COMPUTING FIBONACCIS
function generateFib(num) {
  let result = [];  //constant time O(1)
  for (let i = 1; i <= num; i++) {  //linear time O(n)

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
//Linear time O(n)

//AN EFFICIENT SEARCH
function efficientSearch(array, item) {
  let minIndex = 0;  
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;  //Constant time O(1), declaring variables 

  while (minIndex <= maxIndex) {  //while loop that cuts array in half each time it runs Logarithmic time O(log(n))
    currentIndex = Math.floor((minIndex + maxIndex) / 2);  //constant time O(1) basic arithmetic
    currentElement = array[currentIndex];  //declares currentElement to be item in middle of array (given as a sorted array) constant time O(1)

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }  //if item in middle of array < item, min index is now the item 1 to the right of middle  constant time O(1) will take same amount of time no matter the size of the array
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }  //if item in middle of array > item, max index is now the item 1 to the left of middle  constant time O(1) will take same amount of time no matter the size of the array
    else {
      return currentIndex;  //item found! constant time O(1) will take same amount of time no matter the size of the array
    }
  }
  return -1;
}
//Logarithmic time O(log(n))

//RANDOM ELEMENT
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//Constant time O(1) - does not matter the size of the array--will always take the same amoutn of time because this produces a random element from an array

//IS IT PRIME?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;  //constant time O(1)
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
//looping through numbers linear time