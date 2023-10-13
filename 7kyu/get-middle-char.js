/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output
The middle character(s) of the word represented as a string.
*/

//Solution 1
function getMiddle(word) {
    if (word.length % 2 === 0) {
        let i2 = word.length / 2
        let i1 = i2 - 1
        return word[i1] + word[i2]
    }
    else {
        let i = Math.floor(word.length / 2)
        return word[i]
    }
}

//Solution 2
function getMiddle(word) {
    return word.slice((word.length-1)/2, word.length/2+1)
    //slice() method uses Math.floor() to round down float to integer
}

//Solution 3
function getMiddle(word) {
    let middle = word.length/2
    return word.length % 2 ? word.slice(middle, middle+1) : word.slice(middle-1, middle+1)
}