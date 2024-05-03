function counter(n) {
    return function() {
        return n++;
    };
}

// Example usage:
let n = 5;
const myCounter = counter(n);
console.log(myCounter());  // Output: 5
console.log(myCounter());  // Output: 6
console.log(myCounter());  // Output: 7
