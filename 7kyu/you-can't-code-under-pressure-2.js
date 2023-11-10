/*
Code as fast as you can!

You need to make a constructor function with two methods (and only these two methods) to return and increment a counter, but the counter should not be directly accessible from outside the function.
*/

////////////////////
// ~ OLD SYNTAX ~ //
////////////////////

// Solution 1
function Counter() {
    let count = 0
    this.check = function() {
        return count
    }
    this.increment = function() {
        count++
    }
}

// Solution 2 - Arrow function
function Counter() {
    let count = 0
    this.check = () => count
    this.increment = () => count++
}

// Solution 3 - Use 'this.count' instead of 'let count'
function Counter() {
    this.count = 0
    this.check = () => this.count
    this.increment = () => this.count++
}


////////////////////
// ~ NEW SYNTAX ~ //
////////////////////

class Counter {
    constructor() {
        this.count = 0
    }
    check() {
        return this.count
    }
    increment() {
        this.count++
    }
}