//Check occurance of each charecter
let name = "karma kumar rout";
let arr = name.split('');
//console.log(arr)

let result = arr.reduce((acc, char)=>{
    if(char !== ' '){
         acc[char] = (acc[char] || 0) + 1;
    }
    return acc;
},{})
console.log(result)