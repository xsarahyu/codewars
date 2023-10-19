/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//Solution 1
function getCount(str) {
    let count = 0
    for (let i=0; i<str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
        else {
            count=count
        }
    }
    return count
}

//Solution 2
function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length
}

//Solution 3
function getCount(str) {
    let count = 0
    for (i in str) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++
        }
    }
    return count
}