//Count vowels and consonants in a string.

/////My code/////
// const str = "Hello imprintnext";
// const vowels = ['a','e','i','o','u'];
// const blankObj = {};
// let count = 0;
// for(let char of str){
//     if(vowels.findIndex(v => v === char) > 0){
//         count++
//     }
// }
// console.log(count)

/////////BEST SOLUTION///////////
// const str = "Hello imprintnext";
// const vowels = ['a','e','i','o','u'];

// let vowelCount = 0;
// let consonantCount = 0;

// for (let char of str.toLowerCase()) {
//   if (char >= 'a' && char <= 'z') {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     } else {
//       consonantCount++;
//     }
//   }
// }

// console.log("Vowels:", vowelCount);
// console.log("Consonants:", consonantCount);

//Reverse a string without using built-in methods.

const str = "Hello imprintnext";
const arrStr = str.split('');
let newChar = '';

for(let i = arrStr.length -1; i >= 0 ; i--){
    newChar += arrStr[i]
}
console.log(newChar);






