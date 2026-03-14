//Count occurrences of each word
let str = "javascript is fun javascript is powerful";
let arr = str.split(" ");

const result = arr.reduce((acc, item) =>{
    acc[item] = (acc[item] || 0) + 1;
    return acc;
    console.log('hii')
},{})
console.log(result)