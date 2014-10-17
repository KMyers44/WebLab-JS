
function findLongestWord(str) {

    var longestWord = "";
    var words = str.trim().split(" ");

    // console.log("word list", words);

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        // console.log("inside loop", i, word);

        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(findLongestWord("which word in this sentence is the longest"));