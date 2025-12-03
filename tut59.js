/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()

console.log(random)
let a = prompt("enter the number first")
let b = prompt("enter the operation")
let c = prompt("enter the number second")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}

if (random > 0.1) {
    console.log(`the answer is  ${a} ${b} ${c} `)
    alert(`the answer is ${eval(` ${a} ${b} ${c} `)}`)
}
else {
    b = obj[b]
    alert(`the answer is ${eval(` ${a} ${b} ${c} `)}`)
}