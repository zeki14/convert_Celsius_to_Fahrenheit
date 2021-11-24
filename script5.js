function largestOfFour(arr) {
    let newArr =[];
  for(let i=0; i<arr.length; i++){
    let maxValue = arr[i][0];
    for( let j =0; j < arr[i].length; j++){
      if(arr[i][j] > maxValue){
        maxValue = arr[i][j];
      }
    }
    newArr[i] = maxValue;
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }