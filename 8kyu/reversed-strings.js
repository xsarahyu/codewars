/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

//Solution 1
function solution(str){
    let strReversed = '';
    for (i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    return strReversed;
}

//Solution 2
let solution = str => str.split("").reverse().join("")