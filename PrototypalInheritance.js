const parent = {
    method1: function() {
        console.log(`Hello Iam ${this.name}`);
    }
};

const child = Object.create(parent);
child.name="Adarsh";
child.method1();