/**
 * Simple function in JavaScript
 */
function myFunc() {}

console.log(myFunc) // myFunc()

myFunc()
const functionResut = myFunc()

console.log(functionResut) // undefined (By default function returns undefined)
console.log(myFunc()) // undefined
console.log(myFunc(10, true)) // returns undefined()[it means we can call func with parameter even though we don't have that func defined]

/**
 * Example-2
 * Parameters of the function
 */
function myFunc(a, b) {
  console.log(a)
  console.log(b)
}
myFunc(10, 20) // 10 20
myFunc(true, null) // true null
myFunc() // undefined
myFunc("abc") // abc , undefined

console.log(myFunc(4, 3)) // 4,3, undefined(Because we don't have return type inside the function)

/**
 * Function Scope
 */
function myFunc(a, b) {
  console.log(a, b)
}
console.log(myFunc(5, 6))
console.log(a) // Error: a is not defined (execution exited from this line so line 37 won't execute)
console.log(b)

/**
 * Reuse Parameter Names
 */
function myFunc1(a, b) {
  console.log(a, b)
}
function myFunc2(a, b) {
  console.log(a, b)
}
const a = true
const b = null

myFunc1(1, 2)
myFunc2(3, 4)

console.log(a, b) // true , null

/**
 * Example 5
 * Add return
 */
function sum(a, b) {
  return a + b
}
sum(2, 5)
console.log(sum(2, 5))
console.log(sum(10, 5))
console.log(sum("ab", 5))
console.log(sum())
/**
 * Example 6
 * What happens after "return"?
 */
function myFunc(a) {
  console.log(a)
}
myFunc(10)
