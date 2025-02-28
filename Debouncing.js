function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);  // Clear previous timer
        timer = setTimeout(() => func(...args), delay);
    };
}

// Simulated API call
function fetchData(query) {
    console.log(`Fetching data for: ${query}`);
}

// Using debounce: waits 1 second after the user stops typing
const debouncedSearch = debounce(fetchData, 1000);

// Simulating user typing
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");

// ✅ Output (only one API call happens after 1 second delay)
// "Fetching data for: Hello"
