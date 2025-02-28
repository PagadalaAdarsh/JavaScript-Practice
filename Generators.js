function* generatorFunc(){
    console.log("Trying to understand Generator function");
    yield "This is first step";

    console.log("Step 2");
    yield "This is second step";

    console.log("Final Step");
    return "Finished";
}

const gen = generatorFunc();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());