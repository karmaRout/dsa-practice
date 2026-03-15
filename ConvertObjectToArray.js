const arr = [
  {id:1, name:"A"},
  {id:2, name:"B"}
];
const output = arr.reduce((acc,item)=>{
    acc[item.id] = item
    return acc
},{})
console.log(output)