// ✅ Spread Operator with Arrays (Copying & Merging)
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

// Copying an array
const copyNumbers = [...numbers1];
console.log("Copied Array:", copyNumbers); // ✅ Output: [1, 2, 3]

// Merging arrays
const mergedNumbers = [...numbers1, ...numbers2];
console.log("Merged Array:", mergedNumbers); // ✅ Output: [1, 2, 3, 4, 5, 6]

// ✅ Spread Operator with Objects
const person = { name: "Adarsh", age: 25 };
const details = { ...person, city: "Bangalore" };
console.log("Updated Object:", details); 
// ✅ Output: { name: "Adarsh", age: 25, city: "Bangalore" }

// ✅ Rest Operator in Function Parameters (Collecting Arguments)
function sum(...numbers) { // Collects all function arguments into an array
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log("Sum:", sum(10, 20, 30)); // ✅ Output: 60
console.log("Sum:", sum(5, 10));      // ✅ Output: 15

// ✅ Rest Operator in Array Destructuring
const [first, second, ...remaining] = [100, 200, 300, 400, 500];
console.log("First:", first);        // ✅ Output: 100
console.log("Second:", second);      // ✅ Output: 200
console.log("Remaining:", remaining); // ✅ Output: [300, 400, 500]

// ✅ Rest Operator in Object Destructuring
const user = { username: "Adarsh", email: "adarsh@example.com", role: "Admin" };
const { username, ...otherDetails } = user;
console.log("Username:", username);       // ✅ Output: Adarsh
console.log("Other Details:", otherDetails); // ✅ Output: { email: "adarsh@example.com", role: "Admin" }
