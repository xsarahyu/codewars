/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

//Solution 1
function repeatStr (num, str) {
    let repeatStr = ""
    for (i=1; i<=num; i++) {
        repeatStr += str
    }
    return repeatStr
}

//Solution 2
function repeatStr (num, str) {
    let repeatStr = ""
    let i=1
    while (i<=num) {
        repeatStr += str
        i++
    }
    return repeatStr
}

//Solution 3
function repeatStr (num, str) {
    return str.repeat(num)
}

//Solution 4
repeatStr = (num, str) => str.repeat(num)