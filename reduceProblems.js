//////////////Find the sum of all numbers in an array using reduce////////////////
const arr = [1,2,3,4,5];
const result = arr.reduce((acc,item)=>{
    return acc + item
},0)
console.log("RESULT :-", result)
//////SYNTAX/////////
// array.reduce((accumulator, currentItem) => {
//   return newAccumulator;
// }, initialValue);
//////////////////////