//Remove duplicate objects from array
let arr = [
    {"id": 1, "name": "karma", "profession": "ABC"},
    {"id": 2, "name": "Dharma", "profession": "Marketing"},
    {"id": 1, "name": "karma", "profession": "Developer"},
    {"id": 2, "name": "Dharma", "profession": "Marketing"}
]
const result = Object.values(
  arr.reduce((acc, item) => {
      const key = JSON.stringify(item)
      acc[key] = item
      return acc
  }, {})
);

console.log(result);