const nums = [1,2,3,4];
function firstFunc(num) {
    return num+1;
}

const finalRes = nums.map(firstFunc);         //higher order function map taking another func as argument
console.log(finalRes);

//return function as result
function outer(num) {
    return function inner(factor) {
        return num*factor;          
    }
}

const res1 = outer(5);
const res2 = outer(7);

console.log(res1(2));
console.log(res2(3));

//
const res = nums.filter(n=> n>3);
console.log(res);