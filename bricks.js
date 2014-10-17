
function bricks(small, large, total_length) {
    var small = small * 1; //small bricks are 1" each
    var large = large * 5;  //large bricks are 5" each
    var available_length = small + large;

    if (available_length <= total_length) {
        return true;
    } else {
        return false;
    }

    return bricks;
}

console.log(bricks(4, 4, 25));