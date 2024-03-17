function FizzBuzz(start, end) {
    // Initialize an empty string to store the result
    let result = "";

    // Iterate through the range from start to end inclusive
    for (let i = start; i <= end; i++) {
        // Check if the current number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz";
        }
        // Check if the current number is divisible by 3
        else if (i % 3 === 0) {
            result += "Fizz";
        }
        // Check if the current number is divisible by 5
        else if (i % 5 === 0) {
            result += "Buzz";
        }
        // If none of the above conditions are met, append the number itself
        else {
            result += i;
        }
        // Add a comma and space after each value (except for the last one)
        if (i !== end) {
            result += ", ";
        }
    }

    // Return the resulting string
    return result;
}

// Test case
console.log(FizzBuzz(1, 20)); // Output: "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz"
