/**
 * Section 1
 * Arithmetic Operators
 */
let a, b
a = 1
b = 2
console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log(a - b)

a = "abc"
b = 5
console.log(a + b)
console.log(a * b)
console.log(a / b)
console.log(a - b)

// String concatenation
c = "1"

// Unary operator
console.log(+c) // 1
console.log(Number(c)) // 1

c = undefined
console.log(+c) // NaN

// Unary minus
c = "5"

console.log(-c) // -5
c = "abc"
console.log(-c) // NaN

// ++
let d = 5
++d
console.log(d) // 6
d++
console.log(d) // 7

// Built-in "++" function First increments value of the operand and
// Second return value of the operand
console.log(++d) // 8

// Built-in "++" function First return value of the operand and
// Second increments value of the operand
console.log(d++) // 8
console.log(d) // 9

// --
console.log(d--) // 9
console.log(d) // 8
console.log(--d) // 7
console.log(d) // 7
/**
 * Section 2
 * Comparision Operators
 * Number Comparision
 */
let a, b
a = 5
b = 7
c = 5

console.log(a < b)
console.log(a > b)

console.log(a <= c)
console.log(a >= c)

let myStr1, myStr2
myStr1 = "abc"
myStr2 = "bcd"
myStr3 = "Bcd"

// Sorted strings "Bcd", "abc", "bcd"

console.log(myStr1 > myStr2) // false
console.log(myStr1 < myStr2) // true
console.log(myStr1 > myStr2) // true

console.log("============================================")

// Equality Operators
// NEVER use "==" and "!=" operators
let myString = "0"
let myNumber = 0
let myBoolean = false

// Types of the values may be different
console.log(myString == myNumber) // true
console.log(myNumber == myBoolean) // true
console.log(myBoolean == myString) // true

// // Types and values are compared
console.log(myString === myNumber) // false
console.log(myNumber === myBoolean) // false
console.log(myBoolean === myString) // false

// How you should compare variables of different types
console.log(Number(myString) === myNumber) // true
console.log(+myString === myNumber) // true

console.log(myString != myNumber) // false
console.log(myString !== myNumber) // true

console.log("============================================")

console.log(null === undefined) // false
console.log(null == undefined) // true
console.log((((0 === "") === null) === undefined) === false) // true
