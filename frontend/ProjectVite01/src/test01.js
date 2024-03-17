function ValidateName(name) {
    // Check if name is a string
    if (typeof name !== 'string') {
        return false;
    }
    
    // Trim leading and trailing whitespace
    name = name.trim();
    
    // Check if name has at least two characters
    if (name.length < 2) {
        return false;
    }
    
    // Check if first character is a capital letter
    if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
        return false;
    }
    
    // Check if name contains "@"
    if (name.includes('@')) {
        return false;
    }
    
    // All conditions met, return true
    return true;
}

// Test cases
console.log(ValidateName("John")); // true
console.log(ValidateName("Sue")); // true
console.log(ValidateName("Yes")); // true
console.log(ValidateName("J@ne")); // false
console.log(ValidateName("suzy")); // false
console.log(ValidateName("J")); // false
console.log("wwwwww"); // true