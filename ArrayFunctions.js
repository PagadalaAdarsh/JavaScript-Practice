const arrowFunc1 = (name) => "Hello! "+name;

console.log(arrowFunc1("Adarsh"));

const arrowFunc2 = () => {
    let name = "Arun";
    return "Hello "+name;
}
console.log(arrowFunc2());

const arrowFunc3 = (a,b) => a*b;
console.log(arrowFunc3(4,3));

const arr = [1,4,6,2,4,9];
const arrowFunc4 = arr.filter(n => n%2!==0);
console.log(arrowFunc4);

const arrowFunc5 = arr.map(n => n*2);
console.log(arrowFunc5);