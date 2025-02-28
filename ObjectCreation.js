//object literals {} 
const person1 = {
    name: "Adarsh",
    age: 21,
    greet: function() {
        console.log(`my name is ${this.name}`);
    }
};

person1.greet();

//using new Object()

const person2 = new Object();
person2.name="vaisnavi";
person2.age=23;
person2.greet=function() {
    console.log(`Hello my name is ${this.name}`);
}
person2.greet();

//using constructor function
function constFunc(name, age) {
    this.name= name;
    this.age = age;
    this.greet=function () {
        console.log(`my name is ${name} and age ${age}`);
    }
}
const person3 = new constFunc("Adarsh",21);
const person4 = new constFunc("Arun",24);

person3.greet();
person4.greet();

//using Object.create()
const person5 = {
    greet: function() {
        console.log(`This is my ${this.name}`);
    }
};
person5.name= "book";
person5.greet();

//using ES6 class syntax
class person6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet = function() {
        console.log(`My name is ${name} my age ${age}`);
    }

}
const obj1 = new person6("Swathi",21);
const obj2 = new person6("Kiran",32);
obj1.greet();
obj2.greet();