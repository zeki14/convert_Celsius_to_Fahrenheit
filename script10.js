// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    let convertToArray = str.toLowerCase().split(" ");
    let result = convertToArray.map(function(val){
        return val.replace(val[0], val[0].toUpperCase());

    })
 
    return result.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));