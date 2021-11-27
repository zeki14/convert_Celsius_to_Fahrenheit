// Falsy Bouncer
        // Remove all falsy values from an array.

        // Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

        // Hint: Try converting each value to a Boolean.


        function bouncer(arr){
            let newArr = [];
            for(let i =0; i<arr.length; i++ ){
                if(arr[i]){
                    newArr.push(arr[i]);
                }
            }
            console.log(newArr)
            return newArr;
        }

// Using .filter() and the Bolean() function

        function bouncer(arr) {
            return  arr.filter(Boolean);
             }
          
          console.log(bouncer([7, "ate", "", false, 9]));