/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:
dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.
*/

// Solution 1
function dup(arr) {
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i].split('').map((letter, index) => {
      if (letter === arr[i][index-1]) {
        letter = ''
      } else return letter
    }).join('')
  }
  return arr
}

// Solution 2 (Breaking down nested loops into 2 separate functions)
function dup(arr) {
  return arr.map(word => removeDupes(word))
}

function removeDupes(str) {
  let word = ''
  for (let i=0; i<str.length; i++) {
    if (str[i] !== str[i-1]) {
      word += str[i]
    }
  }
  return word
}

// Solution 3
dup = arr => arr.map(word => word.replace(/(.)\1+/g, '$1'))
dup = arr => arr.map(word => word.replace(/(\w)\1+/g, '$1'))

// Solution 4
dup = arr => arr.map(word => word.split('').filter((letter, i) => letter !== word[i-1]).join(''))