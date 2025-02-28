const myPromise = new Promise((resolve,reject) => {
    let res = true;
    
    setTimeout(() => {
        if(res) {
            resolve("Resolved");
        } else {
            reject("Rejected");
        }
    },3000);
});
myPromise.then((msg)=> {
    console.log(msg);
}).catch((msg)=> {
    console.log(msg);
}
);

