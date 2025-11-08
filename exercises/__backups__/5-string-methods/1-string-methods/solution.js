// ==========================================
// javascript string methods reference guide
// ==========================================

// accessing characters
const strAccess = "Hello World";
strAccess[0]; // returns 'H' (like array access)
strAccess.charAt(0); // returns 'H' (traditional method)

// finding string length
const strLength = "Hello";
strLength.length; // returns 5

// searching methods
const searchStr = "Hello World";
searchStr.indexOf("World"); // returns 6 (first occurrence)
searchStr.lastIndexOf("o"); // returns 7 (last occurrence)
searchStr.search(/World/); // returns 6 (supports regex)
searchStr.includes("Hello"); // returns true (ES6+)
searchStr.startsWith("Hello"); // returns true (ES6+)
searchStr.endsWith("World"); // returns true (ES6+)

// extracting parts of strings
const extractStr = "Hello Beautiful World";
// slice(startIndex, endIndex) - endIndex is optional
extractStr.slice(6, 15); // returns 'Beautiful'
extractStr.slice(6); // returns 'Beautiful World'
extractStr.slice(-5); // returns 'World' (negative counts from end)

// substring(startIndex, endIndex) - similar to slice but doesn't accept negative
extractStr.substring(6, 15); // returns 'Beautiful'

// substr(startIndex, length) - second parameter is length
extractStr.substr(6, 9); // returns 'Beautiful'

// modifying strings
const modifyStr = "Hello World";
modifyStr.replace("World", "Universe"); // returns 'Hello Universe'
modifyStr.replaceAll("l", "L"); // returns 'HeLLo WorLd' (ES2021+)
modifyStr.toUpperCase(); // returns 'HELLO WORLD'
modifyStr.toLowerCase(); // returns 'hello world'
modifyStr.trim(); // removes whitespace from both ends
modifyStr.trimStart(); // removes whitespace from start
modifyStr.trimEnd(); // removes whitespace from end

// splitting and joining
const splitStr = "apple,banana,orange";
splitStr.split(","); // returns ['apple', 'banana', 'orange']
splitStr.split(""); // splits into individual characters

// padding (ES2017+)
const padStr = "Hello";
padStr.padStart(10, "*"); // returns '*****Hello'
padStr.padEnd(10, "*"); // returns 'Hello*****'

// character code methods
const charStr = "A";
charStr.charCodeAt(0); // returns 65 (UTF-16 code)
String.fromCharCode(65); // returns 'A'

// comparing strings
const compareStr = "Hello";
compareStr.localeCompare("hello"); // returns -1, 0, or 1 based on sort order

// repeating strings (ES6+)
const repeatStr = "Ha";
repeatStr.repeat(3); // returns 'HaHaHa'

// template literals (ES6+)
const name = "World";
`Hello ${name}!`; // returns 'Hello World!'
