let arr = ["apple","banana","apple","orange","banana","apple"];

const uniqeArr = arr.filter((item,index,self) =>{
    return index == self.findIndex(obj => obj == item)
})
console.log(uniqeArr);