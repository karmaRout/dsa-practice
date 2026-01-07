//Find the first repeating character in a string.
const str = "aaaytrreeeuijhhh";
const obj = {};
///one approch

// for(let char of str){
//     obj[char] = (obj[char] || 0) + 1
// }
// const arrList = Object.entries(obj);
// for(let item of arrList){
//     if(item[1] > 1){
//         console.log(item[0])
//         break;
//     }
// }
///2nd approch
for (let char of str) {
  if (obj[char]) {
    console.log(char);
    break;
  }
  obj[char] = 1;
}
