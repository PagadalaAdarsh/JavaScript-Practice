function name1(name) {
    this.name = name;
}
name1.prototype.getName= function() {
    return this.name;
}

const obj =new name1("Adarsh");
const res = obj.getName();
console.log(res);