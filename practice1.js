//Count how many times each character appears in a string.//
const str = "aaaytrreeeuijhhh";
const  obj = {}
for(let char of str){
    obj[char] = (obj[char] || 0) + 1
}
console.log(obj)