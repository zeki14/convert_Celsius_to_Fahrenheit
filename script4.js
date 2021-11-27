function findLongestWordLength(str) {
    let words= str.split(" ");
    let longest = 0;
    for(let i =0; i<words.length; i++){
     if(words[i].length > longest){
       longest = words[i].length;
        }
  
      }
    return longest;
    
    }
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");

  //usando map.

  function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }