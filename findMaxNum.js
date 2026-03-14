//Find maximum number
let arr = [5,10,2,25,7];
const result = arr.reduce((acc, num) =>{
    return acc > num ? acc : num
},0)
console.log(result)