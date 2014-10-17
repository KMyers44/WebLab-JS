/**
 * Created by kelly on 10/15/14.
 */

function countHoles(str) {

    var lookup = {
        a: 1,
        A: 1,
        b: 1,
        B: 2,
        d: 1,
        D: 1,
        e: 1,
        g: 1,
        o: 1,
        O: 1,
        p: 1,
        P: 1,
        q: 1,
        Q: 1,
        R: 1
    }

    var total = 0;
    var letters = str.split("");

    for (var i = 0; i < letters.length; i++) {
        var letter = letters[i];
        if (lookup[letter]) total += (lookup[letter]);
    }

    return total;




}

var result=countHoles("hello world");
console.log(result)
