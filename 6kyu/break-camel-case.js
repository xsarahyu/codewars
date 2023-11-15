/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

// Solution 1 - RegEx
const solution = str => str.replace(/([A-Z])/g, ' $&')

// Solution 2 - RegEx positive lookahead assertion
const solution = str => str.replace(/(?=[A-Z])/g, ' ')
// "Find position where next character is uppercase & insert space."

// Solution 3
function solution(str) {
    return str.split('').map(function(char) {
        if (char === char.toUpperCase()) return ' ' + char
        else return char
    }).join('')
}

function solution(str) {
    return str.split('').map(char => {
        if (char === char.toUpperCase()) return ' ' + char
        else return char
    }).join('')
}

// Solution 4 - arrow syntax
const solution = str => str.split('').map(char => (char === char.toUpperCase() ? ' ' + char : char)).join('')
const solution = str => str.split('').map(char => (char === char.toUpperCase() ? ` ${char}` : char)).join('')