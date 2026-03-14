//SUM OF ALL ARRAY USING REDUCE
const arr = [1,2,3,4,5];
const result = arr.reduce((acc,item)=>{
    return acc + item
},0)

console.log(result)
//Array.prototype (Custom Method)
Array.prototype.double = function(){
    return this.map(x => x*2)
}
console.log([1,2,3].double());
Array.prototype.sum = function(){
    return this.reduce((acc,item)=>{
        return acc+item
    },0)
}
console.log([1,2,3].sum())
///array.find()

const output = [1,4,10,30,20,34].find((item)=>{
    return item > 10
})
console.log(output)
// find() returns the first element in the array that satisfies the provided condition.

// It stops as soon as a match is found

// If no element matches, it returns undefined

// It does not modify the original array

//array.some()
console.log([1,2,3,4].some(x => x % 3 == 0))
// What some() does

// some() checks whether at least one element in the array satisfies the given condition.

// Returns true if any element matches

// Returns false if none match

// Stops iterating as soon as it finds a match

// Does not modify the original array

//array.every()
console.log([1,2,3].every(x => x > 2)); 
//You need to enforce a rule on all elements

console.log([3,1,4,2].sort((a,b) => a - b)); // [1,2,3,4]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//array.slice() (Non-mutating)
console.log([1,2,3,4].slice(1,3)); // [2,3]
//array.slice() (Non-mutating)
let arr1 = [1,2,3,4];
arr1.splice(1,2); // removes [2,3]
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
