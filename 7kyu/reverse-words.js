/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
    let words = str.split(' ')
    let reversedWords = words.map(word => word.split('').reverse().join(''))
    return reversedWords.join(' ')
}