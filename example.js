/**
 * Created by kelly on 10/16/14.
 */



function freqCount(str) {
    var counts = {};
    var letters = str.split(""); //str.split will sort the letters into an array ["w" "o" "r" "d"]

    for (var i = 0; i < letters.length; i++){
        var letter = letters[i];
        if (!counts[letter]) {  //if there is not a letter in counts, then we'll do something
           counts[letter] = 0;
        }
        counts[letter]++;
    }
    return counts;
}

console.log (freqCount("hello world"));