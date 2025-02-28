// ✅ Implicit Type Coercion (Automatic Conversion)

// String Coercion (Number → String)
console.log("5" + 2); // "52"
console.log(10 + "20"); // "1020"
console.log("5"+"10");

// Number Coercion (String → Number)
console.log("5" - 2); // 3
console.log("10" * "2"); // 20
console.log("100" / "10"); // 10

// Boolean Coercion
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(1)); // true

// Loose Equality (==) vs. Strict Equality (===)
console.log(5 == "5"); // true (Type coercion: "5" → 5)
console.log(5 === "5"); // false (No coercion, different types)

// ✅ Explicit Type Coercion (Manual Conversion)

// Convert to String
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String("Adarsh"));

// Convert to Number
console.log(Number("5")); // 5
console.log(Number("Hello")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Convert to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
