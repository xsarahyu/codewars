/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    let strReversed = '';
    for (i = str.length - 1; i >= 0; i--) {
        strReversed += str[i];
    }
    return strReversed;
}

//or

let solution = str => str.split("").reverse().join("")