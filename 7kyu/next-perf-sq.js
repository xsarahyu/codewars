/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square
*/

//Solution 1
function findNextSquare(num) {
    let sqrt = Math.sqrt(num)
    if (Number.isInteger(sqrt) == true) {
        num++
        while (Number.isInteger(Math.sqrt(num)) == false) {
            num++
        }
        return num
    }
    else {
        return -1
    }
}

//Solution 2
function findNextSquare(num) {
    let sqrt = Math.sqrt(num)
    //if remainder exists (and therefore not integer) --> truthy --> return -1
    if (sqrt%1) {
        return -1
    }
    //if no remainder aka zero (and therefore an integer) --> falsy --> find next perf square
    else {
        return (sqrt+1)**2
    }
}

//Solution 3 - ternary operator
function findNextSquare(num) {
    let sqrt = Math.sqrt(num)
    return sqrt%1 ? -1 : (sqrt+1)**2
}

//Solution 4
function findNextSquare(num) {
    let sqrt = Math.sqrt(num)
    //if you round the square root and you get the same number, then the square root must be an integer and thus the square root of a perf square --> find next perf square
    if (sqrt === Math.round(sqrt)) {
        return (sqrt+1)**2
    }
    else {
        return -1
    }
}

//Solution 5
function findNextSquare(num) {
    let sqrt = Math.sqrt(num)
    return sqrt%1 === 0 ? (sqrt+1)**2 : -1
}