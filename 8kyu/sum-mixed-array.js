/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

//Solution 1
function sumMix(arr) {
    arr = arr.map(Number)
    let sum = 0
    for (i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

//Solution 2
let sumMix = arr => arr.reduce((a, b) => a + +b, 0)
//arr.map(Number) not needed, as the unary plus operator +b converts elements to numbers
//0 is initial value, so code doesn't break if first item of array is string