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

//Find the total number of words in a sentence.
//console.log(str.split(' ').length)

//Find the most frequent character.
const str1 = "Hello imprintppnext";
const obj = {};
for(let char of str1){
    obj[char] = (obj[char] || 0) + 1
}

const result1 = Object.entries(obj).reduce((acc,item)=>{
    //console.log(acc[0],"++",item[1])
    return item[1] > acc[1] ? item : acc;
})

//console.log(result1)
//////////////////Print characters in the order they appear (no duplicates).//////////////////////////////////
const str2 = "Hello Imprintnext";
const newArr = [];
for(let char of str2){
    if(!newArr.includes(char)){
        newArr.push(char)
    }
}
//console.log(newArr.join(''))
////////////////////Count uppercase and lowercase letters separately.///////////////////////////////////
let countUpperCae = 0;
let countLowerCase = 0;
for(let char of str2){
    if(char >= 'A' && char <= 'Z'){
        countUpperCae++;
    }
    else if(char >= 'a' && char <= 'z'){
        countLowerCase++
    }
}
//console.log("UPPER :-",countUpperCae,'||||','LOWER :-', countLowerCase)




