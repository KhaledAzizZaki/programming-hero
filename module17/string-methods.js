// Returns the character at a specified index.
let str = "Hello";
console.log(str.charAt(1)); // "e"

// Returns the Unicode value of the character at the given index.

console.log(str.charCodeAt(1)); // 101

// Joins two or more strings.

let str1 = "Hello";
let str2 = " World";
console.log(str1.concat(str2)); // "Hello World"

// Checks if a string contains a specified value.

console.log("JavaScript".includes("Script")); // true

// Checks if a string ends with a specified value.

console.log("Hello World".endsWith("World")); // true

// Returns the index of the first occurrence of a specified value.

console.log("Hello World".indexOf("o")); // 4

// Returns the index of the last occurrence of a specified value.

console.log("Hello World".lastIndexOf("o")); // 7

// Matches a string against a regular expression.

console.log("Hello 123".match(/\d+/)); // ["123"]

// Replaces a specified value with another value.

console.log("Hello World".replace("World", "JS")); // "Hello JS"

// Searches a string for a specified value and returns its position.

console.log("Hello World".search(/World/)); // 6

// Extracts a section of a string and returns it as a new string.

console.log("Hello World".slice(0, 5)); // "Hello"

// Splits a string into an array based on a separator.

console.log("a,b,c".split(",")); // ["a", "b", "c"]

// Checks if a string starts with a specified value.

console.log("Hello World".startsWith("Hello")); // true

// Extracts characters between two indices.

console.log("Hello World".substring(0, 5)); // "Hello"

// Returns a new string with a specified number of copies.

console.log("Hello ".repeat(3)); // "Hello Hello Hello "

// Pads the beginning of a string with another string.

console.log("5".padStart(3, "0")); // "005"

// Pads the end of a string with another string.

console.log("5".padEnd(3, "0")); // "500"

// Compares two strings in the current locale.

console.log("apple".localeCompare("banana")); // -1

// Converts a value to a string.

console.log((123).toString()); // "123"

// Returns the primitive value of a string object.

let strObj = new String("Hello");
console.log(strObj.valueOf()); // "Hello"
