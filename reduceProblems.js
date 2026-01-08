//////////////Find the sum of all numbers in an array using reduce////////////////
const arr = [1,2,3,4,5];
const result = arr.reduce((acc,item)=>{
    return acc + item
},0)
//console.log("RESULT :-", result)
//////SYNTAX/////////
// array.reduce((accumulator, currentItem) => {
//   return newAccumulator;
// }, initialValue);
//////////////////////

/////////////////////////////Find the maximum number in an array.////////////////////////////////
const arr1 = [1,2,10,5,45,23,12]
const result1 = arr1.reduce((acc, item)=>{
    return acc > item ? acc : item
},arr1[0]) 
console.log(result1)