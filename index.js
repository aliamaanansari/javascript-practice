//  //30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
// function checkString(str){
//   if(str.indexOf("Script") === 4){
//     return str.replace("Script","")

//   }else{
//     return str
//   }
// }
// console.log(checkString("abcdScriptScript"))
// // 31. Write a JavaScript program to find the largest of three given integers. 
// function checkLargestInt(numbers) {

// let j = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > j) {
//         j = numbers[i]
//       }
//     }

//   console.log(j)
// }
// console.log(checkLargestInt([-1, -2, -3, -4, -5, -6, -7, -8, -9]))
// // 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function numbers(x,y){
//   if(Math.abs(100-x) < Math.abs(100-y)){
//     return x;
//   }else{
//     return y
//   }
// }
// console.log(numbers(40,30))
// // 33. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. 

// function numbers(x,y){
//   if(x>=40&&x<=60&&y>=40&&y<=60 ){
//     return console.log('Range 40-60')
//   }else if(x>=700&&x<=100&&y>=70&&y<=100){
//     return console.log('Range 70-100')
//   }else{
//     return console.log('Numbers not in Range')
//   }
// }
// console.log(numbers(50,60))
// // 36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.
// function checkLastDigit(num1, num2, num3){
//   const num1LastDigit = num1 % 1000;
//   const num2LastDigit = num2 % 1000;
//   const num3LastDigit = num3 % 1000;

//  return num1LastDigit === num2LastDigit && num1LastDigit === num3LastDigit; 
// }
// console.log(checkLastDigit(2333,4333,5333))
// // Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

// function strLowerCase(str) {
//   if(str.length > 3)
//     return str.substring(0,3).toLowerCase() + str.substring(3,str.length);

//   else (str.length <= 3)
//     return str.toUpperCase()


// }
// console.log(strLowerCase("ali"))
// 38. Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.  

//   function sumTotalMarks(sub1,sub2,sub3,sub4,sub5) {
//     const totalMarksCounted = sub1+sub2+sub3+sub4+sub5; 
//     return totalMarksCounted
//   }

// function totalMarksGrading(totalmarks){

//   if(totalmarks >= 89 && totalmarks <= 100 ){
//     return console.log("You Got A+ Grade")
//   }else{
//     return false
//   }
// }
// const sumOfMarks = sumTotalMarks(20,20,20,20,20);
// console.log(totalMarksGrading(sumOfMarks))
// // 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
// function computeSum(x,y) {
// const sumOfInt = x + y;
//   if(sumOfInt >= 50 && sumOfInt <= 80){
//     return 65
//   }else return 80
// }
// // console.log(computeSum(30,10))
// // 40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8
// function checkInt(x,y) {
//   if((x === 8 || y === 8) || (x+y === 8) || (x-y === 8)){
//     return true;
//   }else{
//     false
//   }

// }
// console.log(checkInt(12,4))
// // 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40

// function checkSameNum(x,y,z) {
//   if(x == y && y == z && x == z){
//     return 30
//   }else if(x==y || y==z || x==z){
//     return 40
//   }else {
//     return 20
//   }
// }
// console.log(checkSameNum(10,20,30))
// // 42. Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.

// function checkNum(x,y,z) {
//   if(y > x && z > y){
//     return "Strick Mode"
//   }
// else if( z > y){
//   return "Soft Mode"
// }
//   return undefined

// }
// console.log(checkNum(1,1,1))
// // 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit

// function checkRightMostDigit(num1,num2,num3) {
//   if((num1 % 10 == num2 % 10 == num3 % 10) || (
//     num1 % 10 == num2 % 10 || num2 % 10 == num3 % 10) ){
//     return true
//   }else{
//   false}

// }
// console.log(checkRightMostDigit(22,22,23))
// Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others
// function checkRightMostDigit(num1,num2,num3) {
//   if(num1>=20 && num2>=20 && num3>=20  ) {
//     return true
//   }else{
//   false}

// }
// console.log(checkRightMostDigit(22,22,23))
// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.


// function checkNum(x,y){
//   if(x+y === 15 || x === 15 || y === 15){
//     return true
//   }else{
//     return false

//   }

// }
// // console.log(checkNum(-5,20))
// 46. Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

// function checkNum(x, y) {
//   const xTrue = x % 7 == 0 || x % 11 == 0
//   const yTrue = y % 7 == 0 || y % 11 == 0
//   if (xTrue !== yTrue) {
//     return true
//   } else {
//     return false
//   }
// } 
// console.log(checkNum(11, 7))
// 47. Write a JavaScript program to check whether a given number is presents in the range 40..10000.
// function between(x,min,max){
//   if(x>=min && x<=max){
//     return true

//   }else{
//     return false
//   }
// }console.log(between(10001,40,10000))
// 48. Write a JavaScript program to reverse a given string. 
// function strReverse(str){
//   let newStr = "";
//   for(let  i = str.length -1;i >= 0; i--){
//      newStr+=str[i]  }
//   return newStr 

// }
// // console.log(strReverse("ali"))
// 49. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet

// function replaceChar(str) {
//   let newStr = ''
//   for (let i = 0; i <= str.length; i++) {
//     const charCode = str.charCodeAt(i);
//     const nextCharCode = charCode + 1
//     newStr += String.fromCharCode(nextCharCode)
//   }
//   return newStr
// }
// console.log(replaceChar("replaceChar"))

// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.

// "each word of a given string"
// 
// str split into array arr = ["each" "word" "of" "a" "given" "string"]
// map arr to uppercase the first char of each string element in array
// arr = ["Each" "Word" "Of" "A" "Given" "String"]
// join the array of word back into string | join(' ')
// "Each Word Of A Given String"

// const capitalizeFirstLetter = (str) => {
//   if (!str || !str.length) {
//     return ''
//   } else {
//     return str[0].toUpperCase() + str.substring(1);
//   }
// }

// function capitalizeChar(str) {
//   // return str.replace(/(\b[a-z](?!\s))/g, (c)=>c.toUpperCase());
//   // let output = ''
//   // for (let i = 0; i < str.length; i++) {
//   //   if (str[i - 1] === ' ' && str[i] || i === 0) {
//   //     output += str[i].toUpperCase()
//   //   } else {
//   //     output += str[i];
//   //   } 
//   // }
//   // return output;
//   // const splittedStr = str.split(" ");
//   // console.log({ str, splittedStr })
//   // const newArr = splittedStr.map(capitalizeFirstLetter)
//   // return newArr.join("-")
//   let newArr = ''
//   const splittedStr = str.split(" ");
// for(let i = 0 ; i <= splittedStr.length ; i++){
//     newArr += capitalizeFirstLetter(splittedStr[i])+" "
// }
// return newArr
// }
// // console.log(capitalizeFirstLetter(""))
// console.log(c apitalizeChar("each word of a given string"))
// 51. Write a JavaScript program to convert a given number to hours and minutes.

//   function convertNumIntoHoursAnsMinute(num){
// var hours = parseInt(num/60);
//     var minutes = num % 60;
//     return `${hours} : ${minutes}`


//   }
// console.log(convertNumIntoHoursAnsMinute(121))
// 52. Write a JavaScript program to convert the letters of a given string in alphabetical order.

// function convertInAlphabeticalOrder(str) {
//   // let newStr = '';
//   // for(let i=0 ;i <= strAsciiValue.length; i++){
//   // const strAsciiValue = str.charCodeAt(i);

//   // }
//   const strSplitter = str.split("")
//   const asciiValue = strSplitter.map((char) => char.charCodeAt(0))
//   console.log({ strSplitter, asciiValue })
//   return asciiValue.sort((a, b) => a - b).map((no) => String.fromCharCode(no)).join('')
// }
// console.log(convertInAlphabeticalOrder ("gfedcba"))


// 53. Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string. 

// awerb -> true, asdb -> false, bwera -> true
// 0 0+4 

// function checkCharPos(str){
//   if(((/a...b/).test(str))||((/b...a/).test(str))){
//     return true
//   }
//   else return false
// }
// console.log(checkCharPos("pane borrowed"))
// 54. Write a JavaScript program to count the number of vowels in a given string. 

// function checkVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let vowelCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       vowelCount += 1
//     }
//   }
//   return vowelCount
// }
// console.log(checkVowels("aliamauuuan"));
// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's. 

// function getCharCounts(str){
// const counts = {}
//   for(let i = 0;i < str.length;i++){
//     if(counts[str[i]]!==undefined){
//       counts[str[i]] += 1;
//     } else {
//       counts[str[i]] = 1
//     }
//   }
//   return counts
// }
// const compareTwoCharCountEqual = (text, char1, char2) => {
//   const counts = getCharCounts(text)
//   if(counts[char1]===counts[char2]){
//     return true;    
//   } else {
//     return false;
//   }
// }
// console.log(compareTwoCharCountEqual('point', 'p', 't'))
// // console.log(checkEqualChar("ppoint"))
// 56. Write a JavaScript program to divide two positive numbers and return a string with properly formatted

// function returnSrtingFromNumber(num) {
//   let numberString = String(num);
//   let commaIndex = numberString.length - 1;

//   if (numberString.length < 4) {
//     return numberString
//   }
// console.log(numberString.length, 'length')
//   while (commaIndex > 1) {
//     if (commaIndex === numberString.length - 1) {
//       commaIndex = commaIndex - 3;
//     }
//     else {
//       commaIndex = commaIndex - 2;
//     }
// console.log({numberString,commaIndex})
//     numberString = numberString.substring(0, commaIndex + 1) + "," + numberString.substring(commaIndex + 1)


//   }

//   return numberString;


// }
// console.log(returnSrtingFromNumber(3000000))


// 57. Write a JavaScript program to create a new string of specified copies (positive number) of a given string

// function createMultipleOfString(str,n){
//   if(n<0){
//     return false
//   }else{
//     return str.repeat(n)
//   }
// }

// console.log(createMultipleOfString("Ali",8))
// 
// 58. Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above


// function createMultipleOfString(str,n){

//   if(str.length<3){
//     return false
//   }else{
//     const  newString = str.substring(str.length-3).repeat(4)
// console.log(newString)
//   }

// }
// console.log(createMultipleOfString("Aliamaan",4))
// 59. Write a JavaScript program to extract the first half of a string of even length. 
// function createNewString(str){
// return str.slice(0,str.length/2)  
// }
// console.log(createNewString("Javascript"))
// function sliceChar(str){
//   return str.substring( 1, str.length-1)
// }
// console.log(sliceChar("Aiasdsdasdasdasd"))
// function sliceChar(str1,str2){
//   return str1.substring(1)+str2.substring(1)
// }
// console.log(sliceChar("python","java"))//ythonava
// 62. Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.

// function addLast3Char(str){
//   if(str.length>=3){
//     return str.substring(str.length-3)+str.substring(0,str.length-3)
//   }
// }
// console.log(addLast3Char("aliamaan"))
// 63. Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.


// function createNewString(str) {

//   let midIndexOfStr = str.length / 2
//   let newString = str

//   if (str.length % 2 != 0 && str.length >= 3) {
//     newString = str.substring(midIndexOfStr - 1, midIndexOfStr + 2)

//   }
//   return newString
// }

// console.log(createNewString('nitro'))
// 64. Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.

// function concateString(str1, str2) {
//   const minLength = Math.min(str1.length, str2.length)

//   if (str1.length != str2.length) {
//     return str1.substring(0, minLength) + str2.substring(0, minLength)

//   } else {
//     return str1 + str2
//   }
// }
// console.log(concateString("aliii", "ali"))
// 70. Write a JavaScript program to rotate the elements left of a given array of integers of length 3.

// function rotateArr(arr){
//   return [arr[1],arr[2],arr[0]]
// }
// console.log(rotateArr([1,2,3]))

// 71. Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.

// function checkNum(arr){
//   if(arr.length-1 == 1 || arr[0] == 1){
//     return true
//   }
//   return false
// }
// console.log(checkNum([3,4,5,1]))
//?????? // 72. Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3
// function checkNum(arr){
//   if(arr[0] === arr.length-1){
//     return true
//   }else{
//   return false}
// }
// console.log(checkNum([1,4,5,1]))
// 73. Write a JavaScript program to reverse the elements of a given array of integers length 3
// function reverseArr(arr){
//   return arr.reverse()
// }
// console.log(reverseArr([0,1,2,3]))
// ?????// 74. Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array. 
// function returnNewArr(arr) {
//   const maxValue = Math.max(arr[0], arr[arr.length - 1])
//   const newArr = arr.map(() => {
//     return maxValue;
//   })
//   return newArr
// }
// console.log(returnNewArr([1, 2, 3, 4, 5]))

// 75. Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.  
// function newArrFromMiddle(arr1, arr2) {
//   const middleIndexArr1 = Math.ceil(arr1.length / 2);
//   const middleIndexArr2 = Math.ceil(arr2.length / 2);

//   return newArr = [arr1[middleIndexArr1], arr2[middleIndexArr2]]
// }
// console.log(newArrFromMiddle([1, 2, 3, 4, 5], [5, 3, 2, 1, 4]))

// 76. Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.

// function createNewArr(arr) {
// const newArr= [];
//   newArr.push(arr[0],arr[arr.length-1]);
//   return newArr
// }
// console.log(createNewArr([1,2,3,4,5]))
// 77. Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.  
// function testArr(arr){
//  if(arr.includes(1)||arr.includes(3)){
//    return true
//  }else{ return false}
// }
// console.log(testArr([2,2]))
// 78. Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.
// function testArr(arr){
//   if(!arr.includes(1) && !arr.includes(3)){
//     return true
//   }else{return false}
// }
// console.log(testArr([1,2]))
// 79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2. 
// function testArr(arr) {
//   let a = arr[0];
//   let b = arr[1];
//   return (a === 30 && b === 30 )|| (a === 40 && b == 40)}


//   console.log(testArr([40, 40]))
// 80. Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.

// function swapElements(arr){
//    [arr[0],arr[arr.length - 1]] = [arr[arr.length - 1],arr[0]]; 
//   return arr
// }
// console.log(swapElements([1, 2, 3])) 

// function swapElements(arr){
//   var newArr = [...arr]
//   var [first, last] = [arr.splice(0,1), arr.splice(-1)];
//     return  [...last, ...arr, ...first];
// }
// console.log(swapElements([1,2,3,4]))
// 81. Write a JavaScript program to add two digits of a given positive integer of length two
// function addTwoDigits(n){
//   return Math.floor(n/10)+(n%10)
// }
// console.log(addTwoDigits(45))

// 82. Write a JavaScript to add two positive integers without carry.********** ReDO
// function addTwoInt(n1,n2){
//     var result = 0; x = 1;
//   while(n1 > 0 && n2 > 0 ){
//     result += x*((n1+n2)%10);
//     n1 = Math.floor(n1/10);
//     n2 = Math.floor(n2/10);
//     x*=10;
//   }
//   return result
// } 

// console.log(addTwoInt(12,110))
// 83. Write a JavaScript program to find the longest string from a given array of strings.

function check(arr) {
let str = arr.reduce((acc, cur) => acc.length > cur.length? acc: cur);
return [str];
};
console.log(check(['a', 'aa', 'aaa', 'aaaaa','aaaa']));