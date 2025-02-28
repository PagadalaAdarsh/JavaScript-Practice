function calculateFunc(num) {
    return num*num;
}

function memoize1(func) {
    let cache = {};
    return function memoize2(num1) {     // memoize functional is optional
        if(num1 in cache) {
            console.log("Fetching from cache..");
            return cache[num1];
        } else {
            console.log("Calculating..");
            const res = func(num1);
            cache[num1]=res;
            return res;
        }
    }
}




const var1 = memoize1(calculateFunc);
console.log(var1(2));
console.log(var1(2));