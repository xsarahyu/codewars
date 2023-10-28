/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

// Solution 1
function doubleChar(str) {
    let answer = ''
    for (let i=0; i<str.length; i++) {
        answer = answer + str[i] + str[i]
    }
    return answer
}

// Solution 2
const doubleChar = str => str.split('').map(c => c + c).join('')

// Solution 3
const doubleChar = str => str.replace(/(.)/g, '$1$1')