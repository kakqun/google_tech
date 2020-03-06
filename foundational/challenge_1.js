const sentence = "abppplee";
const words = ["able", "ale", "apple", "bale", "kangaroo"];

max_word = getMaxWord(sentence, words);
console.log(max_word);

function getMaxWord(sentence, words) {
    var max_word_length = 0;

    for(var i = 0; i < words.length; i++){
        word = words[i];
        if(sentence[0] == word[0] && sentence[sentence.length] == word[word.length]){
            //この中はサブシーケンス確定
            if(words[i].length >= max_word_length) {
                max_word_length = words[i].length;
                result = words[i];
            }
        }
    }
    return result;
}