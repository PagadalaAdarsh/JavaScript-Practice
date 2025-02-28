function Animal(name) {
    this.name = name;
}


Animal.prototype.speak = function() {
    console.log(`${this.name} is Speaking.`);
}
const dog = new Animal("Cat");
dog.speak();
