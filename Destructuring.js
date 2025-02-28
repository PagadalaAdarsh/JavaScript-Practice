const arr = ["adarsh",23,"Madanapalli",9014046027];
const [name, age] = arr;
console.log(name,age);

const [,age1,,phone] = arr;
console.log(age1,phone);

const arr2 = [10];
const [first,second=20]=arr2;
console.log(first,second);

const user = {
    id: 1,
    profile: {
        username: "Adarsh",
        email: "adarsh@example.com",
    },
};

const { profile: { username, email } } = user;

console.log(username, email); // ✅ Output: Adarsh adarsh@example.com
