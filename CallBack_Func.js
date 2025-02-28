function outer(name,callback) {
    console.log(name);
    console.log("Wait 3 secs");
    setTimeout(()=> {console.log(callback(4))},3000);
}
function callback_Func(num) {
    return num*num;
}

outer("Adarsh", callback_Func);