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
//console.log(result1)

///////////////////////////Count how many times each number appears in an array.//////////////////////////////////
const arr2 = [78,4,33,12,78,45,33,57,21,87,36,23];

const result2 = arr2.reduce((acc, item)=>{
    acc[item] = (acc[item] || 0) + 1;
    return acc
},{})
//console.log(result2)
/////////////////////////////Count total elements in an array without using .length./////////////////////////////////////////
const arr3 = [5,4,3,2,1];
const result3 = arr3.reduce((count)=>{
    return count + 1
},0)
//console.log(result3)

////////////////////////Count occurrences of each character in a string using reduce.////////////////////
const str = "aammmmrrka";
const tempArr = str.split('')
const result4 = tempArr.reduce((acc,item)=>{
    acc[item] = (acc[item] || 0) + 1
    return acc
},{})
//console.log(result4)

//////////////////////Remove duplicate values from an array using reduce./////////////////////////
const str1 = "aammmmrrka";
const tempArr1 = str1.split('')

const result5 = tempArr1.reduce((acc,char)=>{
    if(!acc.includes(char)){
        acc.push(char)
    }
    return acc
},[])
//console.log(result5)

////////////////Flatten a nD array using reduce//////////////////////////
const arr4 = [[1, 2], [3, 4,[7,8,[12,9]]], [5, 6]];
const flatArr = arr4.flat();

const flatternArray = (arr) =>{
    return arr.reduce((acc,item)=>{
        return acc.concat(
            Array.isArray(item)? flatternArray(item): item 
        )
    },[])
}

//console.log(flatternArray(arr4))

/////////////////////////////////Calculate total price from a shopping cart array/////////////////////////////////////////////
const cart = [
  { id: 1, name: "Shirt", price: 500, qty: 2 },
  { id: 2, name: "Jeans", price: 1200, qty: 1 },
  { id: 3, name: "Shoes", price: 2500, qty: 1 }
];

const totalPrice = cart.reduce((acc, item)=>{
    return acc + item.price
},0)
console.log(totalPrice);