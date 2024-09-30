function camelCaseForEach(cssProp) {
    const words = cssProp.split('-');
    let result = words[0];

    words.slice(1).forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1);
    });

    return result;
}

console.log(camelCaseForEach('margin-left')); // marginLeft
console.log(camelCaseForEach('background-image')); // backgroundImage
console.log(camelCaseForEach('display')); // display