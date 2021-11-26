function findElement(arr, func) {
    for (let i =0; i < arr.length; i++){
      if(func(arr[i])==true){
        return arr[i];
      }
    }
     return undefined;
    }
    
    findElement([1, 2, 3, 4], num => num % 2 === 0);


    //The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
    
    function findElement(arr, func) {
        return arr.find(func);
      }