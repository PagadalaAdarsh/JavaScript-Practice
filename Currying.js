function method1(a) {
    return function method2(b) {
        console.log(a+b);
    }
}
const ref1 = method1("Adarsh");
ref1(" Here");