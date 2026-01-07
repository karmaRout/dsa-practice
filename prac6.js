const str = "Hello imprintnext";
//Count vowels and consonants in a string.

/////My code/////
const vowels = ['a','e','i','o','u'];
const blankObj = {};
let count = 0;
for(let char of str){
    if(vowels.findIndex(v => v === char) > 0){
        count++
    }
}
//console.log(count)

///////BEST SOLUTION///////////

let vowelCount = 0;
let consonantCount = 0;

for (let char of str.toLowerCase()) {
  if (char >= 'a' && char <= 'z') {
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

// console.log("Vowels:", vowelCount);
// console.log("Consonants:", consonantCount);

//Reverse a string without using built-in methods.
const arrStr = str.split('');
let newChar = '';

for(let i = arrStr.length -1; i >= 0 ; i--){
    newChar += arrStr[i]
}
//console.log(newChar);

//Remove duplicate characters from a string

const result = str.split('');
const result2 = result.filter((char, index) => str.indexOf(char) == index);
const result3 = result2.join('')
//console.log(result3)




