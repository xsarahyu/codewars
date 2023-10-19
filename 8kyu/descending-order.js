/*
DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

//Solution 1
function descendingOrder(n) { // 213
    let arr = [...n + ''] // ['2', '1', '3']
    let arrSorted = arr.sort().reverse() // ['1', '2', '3'] -> ['3', '2', '1']
    return +arrSorted.join('') // '321' -> 321
}

//Solution 2
function descendingOrder(n) { // 213
    let arr = n.toString().split('') // '213' -> ['2', '1', '3']
    let arrSorted = arr.sort(f = (a, b) => b-a) // ['1', '2', '3']
    return +arrSorted.join('') // '321' -> 321
}

//Solution 3
function descendingOrder(n) { // 213
    let arr = Array.from(String(n)) // '213' -> ['2', '1', '3']
    let arrSorted = arr.sort().reverse() // ['1', '2', '3'] -> ['3', '2', '1']
    return Number(arrSorted.join('')) // '321' -> 321
}