function repeatStr (num, str) {
    let repeatStr = ""
    for (i=1; i<=num; i++) {
        repeatStr += str
    }
    return repeatStr
}

//or
  
function repeatStr (num, str) {
    let repeatStr = ""
    let i=1
    while (i<=num) {
        repeatStr += str
        i++
    }
    return repeatStr
}

//or

function repeatStr (num, str) {
    return str.repeat(num)
}

//or

repeatStr = (num, str) => str.repeat(num)