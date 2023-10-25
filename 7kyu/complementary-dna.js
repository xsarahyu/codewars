/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// Solution 1
function DNAStrand(ssDNA) {
    let cDNA = ''
    for (let i=0; i<ssDNA.length; i++) {
        switch (ssDNA[i]) {
            case 'A':
                cDNA += 'T'
                break
            case 'T':
                cDNA += 'A'
                break
            case 'G':
                cDNA += 'C'
                break
            case 'C':
                cDNA += 'G'
                break
        }
    }
    return cDNA
}

// Solution 2
let pairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
function DNAStrand(ssDNA) {
    return ssDNA.split('').map(n => pairs[n]).join('')
    // Expanded map function:
    // return ssDNA.split('').map(function(n) {return pairs[n]}).join('')
}

// Solution 3
let pairs = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
function DNAStrand(ssDNA) {
    return ssDNA.replace(/./g, n => pairs[n])
    // Expanded function:
    // return ssDNA.replace(/./g, function(n) {return pairs[n]})
}

// Solution 4
let DNAStrand = ssDNA => ssDNA.replace(/./g, n => 'ATGC'['TACG'.indexOf(n)])
// The indexOf() method returns the position of the first occurrence of specified character(s) in a string