'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  var addNums = a + b;
  var messageQ1 = 'The sum of ' + a + ' and ' + b + ' is ' + addNums + '.';
  var sumArray = [addNums, messageQ1];
  return sumArray;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
  var multNums = a * b;
  var messageQ2 = 'The product of ' + a + ' and ' + b + ' is ' + multNums + '.'
  var multArray = [multNums, messageQ2];
  return multArray;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
  var sumOfFirstPairNums = sum(a, b)[0];
  console.log(sumOfFirstPairNums);
  var firstElement = sum(sumOfFirstPairNums, c)[0]; // Sum of all three args
  console.log(firstElement);
  var prodOfFirstPairNums = multiply(a, b)[0];
  console.log(prodOfFirstPairNums);
  var secondElement = multiply(prodOfFirstPairNums, c)[0]; // Product of all 3 args
  console.log(secondElement);
  var messageOneQ2 = a + ' and ' + b + ' and ' + c + ' sum to ' + firstElement + '.';
  console.log(messageOneQ2);
  var thirdElement = messageOneQ2;
  var messageTwoQ2 = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + secondElement + '.';
  console.log(messageTwoQ2);
  var fourthElement = messageTwoQ2;
  var sumAndMultArray = [firstElement, secondElement, thirdElement, fourthElement]; // Create array of all four elements
  return sumAndMultArray;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line
function sumArray(sumArr) { //eslint-disable-line
  var inputArgs = sumArr; // Save inputted array as variable
  var pairOne = sum(inputArgs[0], inputArgs[1])[0]; // Add first pair of numbers of inputted array arg
  var elementOne = sum(pairOne, inputArgs[2])[0]; // Sum of all the numbers of inputted array arg
  console.log('Sum of numbers of inputted array argument:', elementOne);
  var msgQ4 = sumArr + ' was passed in as an array of numbers, and ' + elementOne + ' is their sum.';
  console.log(msgQ4);
  var sumArrayOutput = [elementOne, msgQ4];
  return sumArrayOutput;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
  var inputArg = multArr; // Save inputted array as variable
  var pair1 = multiply(inputArg[0], inputArg[1])[0]; // Multiply first pair of numbers of inputted array arg
  var elemOne = multiply(pair1, inputArg[2])[0]; // Product of all 3 numbers of inputted array arg
  console.log('Product of numbers of inputted array argument:', elemOne);
  var msgQ5 = 'The numbers ' + inputArg + ' have a product of ' + elemOne + '.';
  var output = [elemOne, msgQ5];
  return output;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
  var inputArray = dynamicArray;
  console.log(`inputArray's contents: ${inputArray}`);
  var runningProduct = 1;
  for (var i = 0; i < inputArray.length; i++) {
    runningProduct = multiply(runningProduct, inputArray[i])[0];
    console.log(`runningProduct is now: ${runningProduct}`);
  }  
  var finalProduct = runningProduct;
  var msg = 'The numbers ' + inputArray + ' have a product of ' + finalProduct + '.';
  var outputArray = [finalProduct, msg];
  return outputArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
