function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  console.log(factorialize(5));
 
 
  function factorialize(num, factorial = 1) {
    if (num === 0) {
      return factorial;
    } else {
      return factorialize(num - 1, factorial * num);
    }
  }
console.log(factorialize(5));