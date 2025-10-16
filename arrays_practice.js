//Level 1:Understanding Arrays
//Q1:An array in JavaScript is a type of global object used to store data or to store multiple values in a single variable.
//Examples:
//a-List of products in a store:An array can store the names of all available products, allowing for easy iteration and display on a product page:
    let products = ["Laptop", "Smartphone", "Headphones", "Smartwatch"];
    console.log(products);
//b-List of student names:
    let students = ["Hanadi", "mosaab", "Abdu", "Ali"];
    console.log(students);
//c-Student test scores:
    let testScores = [90 , 85 , 73 , 60];
//---------------------------------------------------
//Q2:In JavaScript, there are several ways to create arrays.
//Different ways to create arrays:
//--Array Literal:most common and easiest.
    let arr = [1,2,3];
    console.log(arr);   
//--new Array():Creates an array object.
    let array1 = new Array(1,2,3);
    console.log(array1);
//--Array.of():creates array from arguments,"Use Array.of() when you want to always create an array containing the given values.".
    let array2 = Array.of(1,2,3);
    console.log(array2);
//--Array.from():Converts iterable to array.
    let array3 = Array.from("Hello")
    console.log(array3);
//-----------------------------------------------------
//Q3:we can use different types of data type in the same array.
//Numbers – 10, 3.5, -2
//Strings – "apple", "hello"
//Booleans – true, false
//Objects – { name: "John" }
//Arrays (nested arrays) – [1, 2, 3]
//Functions – function() { ... }
//Null / Undefined – null, undefined
    let mixedArray = [25, "Hello", true, false, "JavaScript", 99.9];
    console.log(mixedArray);
//25 → number
//"Hello" → string
//true, false → booleans
//"JavaScript" → string
//99.9 → number
//-------------------------------------------------------
//Q4:Different between array and a single variable:
//A single variable is a named storage location that can hold one piece of data at a time.
//An array, conversely, is a named collection of multiple storage locations, all of which store data of the same type.
//(A single variable is like one box that holds one item,
//and an array is like a shelf with many boxes, each holding one value).
// Single variable
let fruit = "Apple";
console.log(fruit);      // Output: Apple
//fruit → can store only one value (like "Apple").
// Array variable
let fruits1 = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits1); 
//fruits → can store many values ("Apple", "Banana", "Mango", "Orange") all in one variable.
//**************************************************************************************************
//Level 2: Accessing and Modifying Arrays:
//Q5:How do you access specific items from an array?
//You access an item in an array using its index number (position).
//Indexes start at 0 (zero-based).
//So,
//The first element is at index 0.
//The second element is at index 1.
//The last element is at index array.length - 1.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Access the first element
let firstFruit = fruits[0];

// Access the last element
let lastFruit = fruits[fruits.length - 1];

// Print them
console.log("First fruit:", firstFruit);
console.log("Last fruit:", lastFruit);
//First fruit: Apple
//Last fruit: Grapes
//-----------------------------------------------------------
//Q6:How do you change a value in an array?
// To change a value in an array, you directly access the element you wish to modify using its index and then assign a new value to it.
//Example:
    let names = ["Hanadi","Kamal","Hussain"];
    console.log(names);
    // The output will be:["Hanadi","Kamal","Hussain"] 
//If I want to Change the element at index 1 (the second element)
    names [1]="Ahmed";
    console.log(names);
    // The output will be:["Hanadi","Ahmed","Hussain"] 
//-------------------------------------------------------------
//Q7:What does .length do?
//The length property (or function, depending on the language) tells you how many elements are in an array.
//Example:
// Create an array
let fruits2 = ["apple", "banana", "cherry", "date"];

// Show how many items are in the array
console.log("Number of items in the array: " + fruits2.length);
//output:
Number of items in the array: 4
//------------------------------------------------------------------
//Q8:How can you add a new element to the end of an array without using .push()?
//You can add a new element to the end of an array by assigning a value to the next available index, instead of using .push().
//Example:
// Create an array
    let colors = ["red", "green", "blue"];

// Add a new element using array index assignment
    colors[colors.length] = "yellow";

// Print the updated array
    console.log(colors);
 Output: ["red", "green", "blue", "yellow"]
//***********************************************************************************************
//Level 3: Working with Loops and Arrays:
//Q9:Q9. Write a program that prints all elements in an array using three different loops:
//  ● for loop 
// Create an array
let numbers = [10, 20, 30, 40, 50];

//Using a for loop
console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//output:
10
20
30
40
50
// ● for...of loop
//Using a for...of loop
console.log("\nUsing for...of loop:");
for (let num of numbers) {
  console.log(num);
}
//output:
10
20
30
40
50
// ● while loop
//Using a while loop
console.log("\nUsing while loop:");
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
//output:
10
20
30
40
50
//The for loop uses an index counter (i) to access each element.

//The for...of loop directly iterates over array elements.

//The while loop keeps running as long as the condition (i < numbers.length) is true.
//---------------------------------------------------------------
//Q10:Write a program that prints all numbers in an array multiplied by 2 using a loop.
// Create an array
let num = [5, 6, 3, 2];

// Loop through the array and multiply each number by 2
for (let i = 0; i < num.length; i++) {
  console.log(num[i] * 2);
}
//output:
10
12
6
4
//---------------------------------------------------------------------
//Q11:Create an array of names and print each name in uppercase using a loop.
// Create an array of names
let names = ["Ahmed", "Sara", "Hanadi", "Amal"];

// Loop through the array and print each name in uppercase
for (let i = 0; i < names.length; i++) {
  console.log(names[i].toUpperCase());
}
//output:
AHMAD , SARA , HANADI , AMAL 
//---------------------------------------------------------------------
//Q12:Write a program that counts how many items are in an array without using .length. Use a loop to count them.
// Create an array of numbers
let number = [3, 7, 12, 45, 9, 22];

// Start counter at 0
let count = 0;

// Use a for loop to count the elements
for (let i in number) {
  count++;
}

// Print the total count
console.log("Total number of items in the array:", count);
//output:
Total number of items in the array: 6
//------------------------------------------------------------------------

//Q13:Create an array of numbers and use a loop to find the largest and smallest number.
// Create an array of numbers
let numbers = [15, 95, 2, 89, 24, 67, 3];

// Assume the first element is both the largest and smallest
let largest = numbers[0];
let smallest = numbers[0];

// Loop through the array
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];  // Update largest if a bigger number is found
  }
  if (numbers[i] < smallest) {
    smallest = numbers[i]; // Update smallest if a smaller number is found
  }
}

// Print the results
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

//output:
Largest number: 95
Smallest number: 2

