async function method1() {
    let data = await new Promise(resolve => setTimeout(() => resolve("Success"), 5000));
    console.log(data);
}

method1();