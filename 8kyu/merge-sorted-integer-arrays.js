/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

// Solution 1
function mergeArrays(arr1, arr2) {
    let arr = [...new Set(arr1.concat(arr2))]
    return arr.sort(function(a, b) {return a-b})
}

// Solution 2
const mergeArrays = (arr1, arr2) => [...new Set(arr1.concat(arr2))].sort((a, b) => a-b)

// Solution 3 - spread operator
const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a-b)