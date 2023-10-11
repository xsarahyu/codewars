/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
*/

//Solution 1
function past(h, m, s) {
    h = 3.6e6 * h
    m = 6e4 * m
    s = 1e3 * s
    return h+m+s
}

//Solution 2
let past = (h, m, s) => (3.6e6 * h) + (6e4 * m) + (1e3 * s)

//Solution 3 - simplified math
let past = (h, m, s) => 1000 * (3600*h + 60*m + s)

//Solution 4 - Date() constructor & setHours() method
//setHours() method takes in h, m, s, and/or ms and changes the date accordingly
//Date() returns string of current time
function past(h, m, s) {
    let time = new Date().setHours(h, m, s)
    let midnight = new Date().setHours(0, 0, 0)
    return Math.round(time - midnight)
}