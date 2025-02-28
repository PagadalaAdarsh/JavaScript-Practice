const arr = [2,8,6,9,5];
const arrMethod1 = arr.map(n=>n*2);
const arrMethod2 = arr.map(n=>n%2==0);
const arrMethod3 = arr.reduce((sum,n)=>sum+n,0);
console.log(arrMethod1);
console.log(arrMethod2);
console.log(arrMethod3);