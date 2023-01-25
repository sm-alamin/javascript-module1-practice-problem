// ******************************** Practice Problem -2 *******************************
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.
// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.
// Output:
// Print the result in 2 decimal places.

// Practice Problem 2

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50
// Output:
// 71.04

// ***************************************Solution************************************
var markOfMathematics = 75.25;
var markOfBiology = 65;
var markOfChemistry = 80;
var markOfPhysics = 35.45;
var markOfBangla =  99.50;
var totalSubject = 5;
var totalMark = markOfMathematics + markOfBiology + markOfChemistry + markOfPhysics + markOfBangla;

var average = totalMark / totalSubject;
var averageMark = average.toFixed(2);
console.log(averageMark);