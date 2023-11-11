/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// Solution 1
const squareSum = nums => nums.map(n => n**2).reduce((total, n) => total + n, 0)

// Solution 2
const squareSum = nums => nums.reduce((total, n) => total + n*n, 0)

// Solution 3
function squareSum(nums) {
    let sum = 0
    for (let i=0; i<nums.length; i++) {
        sum += nums[i]**2
    }
    return sum
}