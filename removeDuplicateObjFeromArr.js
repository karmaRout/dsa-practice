let arr = [
    {"id": 1, "name": "karma"},
    {"id": 2, "name": "Rajendra"},
    {"id": 1, "name": "karma"}
]

//console.log(arr)
const uniqueArr = arr.filter((item,index,self)=>{
   return index == self.findIndex(obj => obj.id == item.id)
})
console.log(uniqueArr)