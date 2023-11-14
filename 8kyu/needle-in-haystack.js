/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:

Example (Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/

// Solution 1 - for loop
function findNeedle(haystack) {
    for (let i=0; i<haystack.length; i++) {
        if (haystack[i] === 'needle') return `found the needle at position ${i}`
    }
}

// Solution 2 - while loop
function findNeedle(haystack) {
    let i=0
    while (i<haystack.length) {
        if (haystack[i] === 'needle') return `found the needle at position ${i}`
        i++
    }
}

// Solution 3 - string concatenation
const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle')

// Solution 4 - template literal
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`