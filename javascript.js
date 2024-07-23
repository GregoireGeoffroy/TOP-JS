function add7(number) {
    return number + 7;
}
console.log(add7 (2))


function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 3))


function capitalize(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("hello"));
console.log(capitalize("WORLD"));
console.log(capitalize("jAvAsCrIpT"));
console.log(capitalize(""));


