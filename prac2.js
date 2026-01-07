// Print characters that appear only once.
const str = "aaaytrreeeuijhhh";
const obj = {};
for(let char of str){
    obj[char] = (obj[char] || 0) + 1
}
const objArr = Object.entries(obj)
for(let item of objArr){
    if(item[1] == 1){
        console.log(item[0])
    }
}