/*
Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.
*/

// Solution 1
const booleanToString = bool => bool.toString()

// Solution 2
const booleanToString = bool => String(bool)

// Solution 3
const booleanToString = bool => `${bool}`

// Solution 4
const booleanToString = bool => bool ? 'true' : 'false'