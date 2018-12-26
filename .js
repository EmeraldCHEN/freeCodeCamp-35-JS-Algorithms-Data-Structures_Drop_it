/*********   Solution #1     **********************************************************************/

function dropElements(arr, func) {  
  let newArr = [];  
  newArr = arr.filter(n => func(n) );

  let resultArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == newArr[0]){
        resultArr = arr.slice(i);
        break; // stop the whole loop once the first element in arr that is identical to the first element in newArr
    }
  }
  return resultArr;
}
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); //return [1, 0, 1]


/*********   Solution #2     **********************************************************************/

function dropElements2(arr, func) {
  let times = arr.length;
  for(let i = 0; i < times; i++){ 
    if(func(arr[0])){ // arr[0] is changed after each Array.prototype.shift()
      break;
    }else{
      arr.shift(); // shift() method changes the length of arr
    }
  }
  return arr;
}



/*********   Solution #3     **********************************************************************/

function dropElements3(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length); 
  /* The findIndex() method returns the index of the first element in arr that satisfies func. 
     Otherwise, it returns -1, indicating no element passed func      */
}



/*********   Solution #4     **********************************************************************/

/* Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array 
   until the function returns true. 
   It also makes sure the array is not empty first to avoid infinite loops.                                        */
function dropElements4(arr, func) {
  while(arr.length > 0 && !func(arr[0])){
    arr.shift();
  }
  return arr;
}




// Retrived from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it/

