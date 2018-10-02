'use strict';
//Exercise 1 - Counting Sheep
/*
 * @function countSheepLoop
 * @desc     Iterative program that counts how many sheep jumps over the fence. 
 * @param    {number} num - the number sheep 
 * @returns  
 * @display  displays how many sheep jumped over the fence
 */

function countSheepLoop(num){
  for(let i=num; i>0; i--){
    console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);

//Linear time O(n)


/*====================================================================
//Exercise 2: Take an array as input which contains an unknown set of numbers,
//and output an array which doubles the values of each item in that array. Test
//your solution by trying a handful of different arrays. Don't worry about
//error checking to make sure that the array you're given is valid input.
//Editorial comment: Obviously arr.map() is the normal way to do this.
*/
function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

//Linear time O(n)

/*====================================================================*/
//Exercise 3: Take a string as input, reverse the string, and return the new
//string.
//Direct transformation of the tail-recursive form.
function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

//Linear time O(n)

/*====================================================================*/
//Exercise 4: Calculates the nth triangular number.
//Should always return n*(n+1)/2
function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

//Linear time O(n)

/*====================================================================*/
//Exercise 5: Split a string based upon a separator (similar to
//String.prototype.split).
//Editorial comment: There are more efficient ways to do this, but this is a
//fairly direct translation of the recursive version.
function split(str, sep) {
  var ret = [];
  while (true) {
    var idx = str.indexOf(sep);
    if (idx == -1) break;
    ret.push(str.slice(0, idx))
    str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

//Linear time O(n)

/*=================================================================================
Exercise 6 - Binary Representation
Write a recursive function that prints out the binary representation of a given number. 
For example the program should take 3 as an input and print 11 as output, or 25 as an input 
and print 11001 as an output. Note that the binary representation of 0 should be 0. 
*/
function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
    let rem = Math.floor(num%2);
    binary = rem + binary;
    num = Math.floor(num/2);
  }
  return binary;


}
console.log(convertToBinaryIter(124)); //1111100

//Logarithmic time O(log(n))

/*=================================================================================
Exercise 7 - Factorial
Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
*/
function factorialIterative(number){
  let fact = 1;
  for (let i = 1; i <= number; i++){
    fact *= i;
  }
  return fact;
}
console.log(factorialIterative(5));

//Linear time O(n)

/*=================================================================================
Exercise 8 - Fibonacci
Write a recursive program that prints the fibonacci sequence of a given number. 
The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. 
For example the 7th fibonacci number in a fibonaci sequence is  13. The sequence looks as follows: 1 1 2 3 5 8 13.
*/

function fibonacciIterative(number){
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
    fib = num1;
    num1 = num1+num2;
    num2 = fib;
    number--;
  }
  return num2;

}

//print the whole sequence


//******** ES6 makes it a bit easier*****
function fibonacciIterative2(number){
  let [num1, num2] = [1,0];
  while(number-- > 0){
    [num1, num2] = [num2+num1, num1];
  }
  return num2;

}
console.log(fibonacciIterative2(3));

// Linear time O(n)

/*=================================================================================
Exercise 9 - Anagram
Too tidious to do this iteratively
*/

/*
Exercise 8 - Animal Heirarchy
Analyze it recursivly - no iterative version needed
*/

/*=================================================================================
Exercise 10 - Animal hierarchy
A program to analyze and understand recursion
No need to solve it iteratively
/*=================================================================================*/
/*
Exercise 11: Organization Chart
No need to have an iterative version of this
*/