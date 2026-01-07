//Find the first non-repeating character in a string.
const str = "aaaytrreeeuijhhh";
const obj = {};
for(let char of str){
    obj[char] = (obj[char] || 0) + 1
}

const listArr = Object.entries(obj)

for(let item of listArr){
    if(item[1] == 1){
        console.log(item[0]);
        break;
    }
}