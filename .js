/*********   Solution #1     **********************************************************************/

function dropElements(arr, func) {  
  let newArr = [];  
  newArr = arr.filter(n=> func(n) );

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











// Retrived from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it/

