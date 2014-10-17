
function bricks(small, large, totalLength) {
    var small = small; //small bricks are 1" each
    var large = large * 5;  //large bricks are 5" each
    var availableLength = small + large;

    if (availableLength <= totalLength) {
        return true;
    } else {
        return false;
    }

    return bricks;
}

console.log(bricks(8, 4, 25));