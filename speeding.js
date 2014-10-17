

var speed = {};
var isBday = 1;    // if birthday = true, then deduct 5 mph from speed

function isSpeeding(speed, isBday) {

    if (isBday == 1) {
        speed = speed - 5;
    }
    if (speed <= 60) {
        return 0;
    } else if (speed > 60 && speed < 80){
        return 1;
    } else {
        return 2;
    }

    return speed;
}


console.log(isSpeeding(82, 1))


/*
function isSpeeding(speed, isBday, limit) {

    if(!limit){
        limit = 60;
    }

    if(isBday){
        limit += 5;
    }

    if(speed <= limit){
        return 0;
    } else if(speed > limit && speed <= (limit + 20)) {
        return 1
    } else {
        return 2;
    }
 */