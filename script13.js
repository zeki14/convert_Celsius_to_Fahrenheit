// Where do I Belong
        // Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b);
    
    for(let i= 0; i < arr.length; i++){
        if(arr[i] >= num){
        return i;
        }
    }
    return arr.length;
    }
    
console.log(getIndexToIns([2, 5, 10], 15))

function getIndexToIns(arr, num){
    return arr
    .concat(num)
    .sort((a,b) => a-b)
    .indexOf(num);
    
}