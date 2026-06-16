function isPalindrome(word) {
    word = word.toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
    
}
function findPalindromeBreaks(words) {
    let result = [];
    if(words.length ==0){
        return result;
    }
    for(let i=0; i<words.length; i++){
        if(!isPalindrome(words[i])){
            result.push(i);
        }}



    return result;
}
function findRepeatedPhrases(words, phraseLength) {
    let result = [];

    if (phraseLength >= words.length) {
        return result;
    }
    let phrases = {};
    for (let i = 0; i <= words.length - phraseLength; i++) {
         let phrase = [];

    for (let j = 0; j < phraseLength; j++) {
        phrase.push(words[i + j]);
    }        
        let phraseStr = phrase.join(' ');
        if (phrases[phraseStr]) {
            phrases[phraseStr].push(i);
        } else {
            phrases[phraseStr] = [i];
        }}
        for (let phrase in phrases) {
    if (phrases[phrase].length > 1) {
        for (const index of phrases[phrase]) {
            result.push(index);
        }
    }
}

return result;
}
function analyzeTexts(texts, phraseLength) {
    let results = [];

    if (texts.length === 0) {
        return results;
    }
    for (const text of texts) {
const palindromeBreaks = findPalindromeBreaks(text);
const repeatedPhrases = findRepeatedPhrases(text, phraseLength);
let object = {    palindromeBreaks: palindromeBreaks,
    repeatedPhrases: repeatedPhrases
};
results.push(object);
}
return results;
}
console.log(analyzeTexts([["madam", "in", "eden", "im", "adam"], ["hello", "world", "hello"]], 2));