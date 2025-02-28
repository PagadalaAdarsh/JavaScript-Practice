const person = {
    name:"Kalyan",
    age:45,
    greet: function(age,city) {
        console.log(`My name is ${this.name} and age ${age} from ${city}`);
    }
};
const anotherPerson = {
    name:"Adarsh"
};

person.greet.apply(anotherPerson,[56,"Madanapalli"]);
