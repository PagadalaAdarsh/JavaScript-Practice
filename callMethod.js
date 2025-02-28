const person1 = {
    name:"Adarsh",
    greet: function() {
        console.log(`My name is ${this.name} and age ${this.age}`);
    }
};

const person2 = {name:"Arun",age:34};     
person1.greet.call(person2);   //invoke greet with person2 as this features