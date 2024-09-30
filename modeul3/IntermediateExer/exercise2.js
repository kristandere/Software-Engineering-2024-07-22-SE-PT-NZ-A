function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + '...'; 
    } else {
        return str; 
    }
}

console.log(truncate('This text will be truncated if it is too long', 25));