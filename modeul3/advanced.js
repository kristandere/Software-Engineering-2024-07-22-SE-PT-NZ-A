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