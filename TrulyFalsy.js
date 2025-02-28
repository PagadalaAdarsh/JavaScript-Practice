console.log(Boolean(0));          // false  (Zero)
console.log(Boolean(""));         // false  (Empty string)
console.log(Boolean(null));       // false  (Null)
console.log(Boolean(undefined));  // false  (Undefined)
console.log(Boolean(NaN));        // false  (Not a Number)
console.log(Boolean(false));      // false  (Boolean false)

console.log(Boolean(1));         // true  (Non-zero numbers)
console.log(Boolean(-100));      // true
console.log(Boolean("Hello"));   // true  (Non-empty string)
console.log(Boolean([]));        // true  (Empty array)
console.log(Boolean({}));        // true  (Empty object)
console.log(Boolean(()=>{}));    // true  (Functions)
console.log(Boolean(true));      // true
