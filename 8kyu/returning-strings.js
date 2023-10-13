/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

//Solution 1
function greet(name) {
    return "Hello, " + name + " how are you doing today?"
}

//Solution 2
greet = (name) => "Hello, " + name + " how are you doing today?"

//Solution 3
greet = (name) => `Hello, ${name} how are you doing today?`