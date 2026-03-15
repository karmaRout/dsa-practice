//OUTPUT
// {
//  20: [{name:"A", age:20}, {name:"C", age:20}],
//  25: [{name:"B", age:25}]
// }
const users = [
  {name: "A", age: 20},
  {name: "B", age: 25},
  {name: "C", age: 20}
];

let grouped = users.reduce((acc, user)=>{
    if(!acc[user.age]){
        acc[user.age] = []
    }
    acc[user.age].push(user)
    return acc
},{})
console.log(grouped)