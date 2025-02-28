class Animal {
    constructor(name) {
        this.name = name;
    }
    method1 =function() {
        console.log(`${this.name} is Eating..`);
    }
}
const ref = new Animal("Cat");
ref.method1();