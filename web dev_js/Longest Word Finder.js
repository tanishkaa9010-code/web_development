function findLongestWordLength (sentence){
let words=sentence.split(" ");
let len=0;
for (const word of words){
    if (word.length > len){
    len= word.length;}
}
return len;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))