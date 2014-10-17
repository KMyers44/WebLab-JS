
function findLongestWord(str) {

    var longestWord = "";
    var words = str.trim().split(" ");

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("which word in this sentence is the longest"));