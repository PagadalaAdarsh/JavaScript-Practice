let arr1 = {name1:"Apple",name2:"Strawberry",name3:"orange"};
console.log("for in loop")
for(let arr in arr1) {
    console.log(arr1[arr]);
}

console.log("for of loop");
let arr2 = ["apple","banana","cherry"];
for(let arr of arr2) {
    console.log(arr2);
}