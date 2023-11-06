/*
Input:
- a string strng
- an array of strings arr

Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
- a boolean true if all rotations of strng are included in arr
- false otherwise

Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

Note:
Though not correct in a mathematical sense
- we will consider that there are no rotations of strng == ""
- and for any array arr: contain_all_rots("", arr) --> true
*/

// Solution 1 - Rotate string clockwise
function containAllRots(str, arr) {
    let strRots = []
    let strRot
    for (let i=0; i<str.length; i++) {
        strRot = str.slice(i) + str.slice(0, i)
        strRots.push(strRot)
    }
    return strRots.every(e => arr.includes(e))
}

// Solution 1 - Rotate string counterclockwise
function containAllRots(str, arr) {
    let strRots = []
    let strRot
    for (let i=str.length; i>0; i--) {
        strRot = str.slice(i) + str.slice(0, i)
        strRots.push(strRot)
    }
    return strRots.every(e => arr.includes(e))
}

// Solution 2
function containAllRots(str, arr) {
    for (let i=0; i<str.length; i++) {
        let strRot = str.slice(i) + str.slice(0, i)
        if (arr.indexOf(strRot) === -1) return false
    }
    return true
}