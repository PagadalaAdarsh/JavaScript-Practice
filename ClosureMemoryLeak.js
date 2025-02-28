function createLeak() {
    let bigData = new Array(1000000).fill("Memory Leak"); // 👀 Large array in memory

    return function() {
        console.log(bigData[0]); // 👀 The closure keeps `bigData` in memory!
    };
}

const leakyFunction = createLeak(); // `bigData` is never released!
leakyFunction();


//Preventing Memory Leaks

function createLeakFixed() {
    let bigData = new Array(1000000).fill("Prevents✅"); // Large array in memory

    return function() {
        console.log(bigData[0]); 
        bigData = null; // ✅ Releases memory immediately
    };
}

const safeFunction = createLeakFixed();
safeFunction(); // ✅ Memory released immediately
