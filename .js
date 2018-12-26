function dropElements(arr, func) {  
  let newArr = [];  
  newArr = arr.filter(n=> func(n) );

  let resultArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == newArr[0]){
        resultArr = arr.slice(i);
        break;
    }
  }
  return resultArr;
}
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); //return [1, 0, 1]











// Retrived from

