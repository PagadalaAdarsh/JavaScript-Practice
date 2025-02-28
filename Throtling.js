function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
}

// Simulated function when scrolling
function onScroll() {
    console.log("User is scrolling...");
}

// Using throttle: runs only once every 2 seconds
const throttledScroll = throttle(onScroll, 2000);

// Simulating scrolling event
window.addEventListener("scroll", throttledScroll);
