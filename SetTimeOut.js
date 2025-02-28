const setDelay = setTimeout(()=> {
    console.log("My name is Adarash");
},5000);

let count = 0;
const setRepeat = setInterval(()=> {
    console.log("My name is Adarsh");
    count++;
    if(count>3) {
        clearInterval(setRepeat);
    }
}, 5000);