/*
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

Reference
There are four quadrants:
First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
*/

//Solution 1
function quadrant(x, y) {
    return x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3)
}

//Solution 2
function quadrant(x, y) {
    if (x > 0) {
        if (y > 0) {
            return 1
        }
        else {
            return 4
        }
    }
    else if (x < 0) {
        if (y > 0) {
            return 2
        }
        else {
            return 3
        }
    }
}