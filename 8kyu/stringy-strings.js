/*
Write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
- The string should start with a 1.
- A string with size 6 should return :'101010'.
- With size 4 should return : '1010'.
- With size 12 should return : '101010101010'.
- The size will always be positive and will only use whole numbers.
*/

// Solution 1
function stringy(size) {
  let str = ''
  for (i=0; i<size; i++) {
    if (i % 2 === 0) str += '1'
    else str += '0'
  }
  return str
}

// Solution 2
const stringy = size => ''.padStart(size, '10')

// Solution 3
const stringy = size => '10'.repeat(size).slice(0, size)

// Solution 4
const stringy = size => Array(size).join('10').slice(0, size)