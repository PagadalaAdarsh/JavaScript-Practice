function counter() {
    let count = 0;
    return function inner() {
        count=count+1;
        return count;
    }
}

const obj = counter();
console.log(obj());
console.log(obj());