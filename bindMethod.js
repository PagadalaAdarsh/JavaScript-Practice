const address = {
    name:"Aravindh",
    village:"Bonthavaripalli",
    state:"AndhraPradesh",
    location: function(age) {
        console.log(`Iam from ${this.village} ${this.state} age ${this.age}`);
    }
};
const address2 = {village:"Mulakalacheruvu",state:"AP", age:21};
const res = address.location.bind(address2,76);
res();
