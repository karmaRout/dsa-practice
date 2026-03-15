//Remove Duplicates From Array
const arr = [1,2,3,2,4,1,5];
const output = arr.reduce((acc, num, index)=>{
     if(!acc.includes(num)) acc.push(num)
     return acc
},[])
console.log(output)