//1

function ucFirstLetters(str) {
    return str
        .split(' ') 
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
        )
        .join(' '); 
}
console.log(ucFirstLetters("los angeles"))

//2

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + '...'; 
    } else {
        return str; 
    }
}

console.log(truncate('This text will be truncated if it is too long', 25));

//3

