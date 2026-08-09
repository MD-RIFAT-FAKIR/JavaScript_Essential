/* arrow function is a sort and smart way to write a function,
comes with ES6 */

const calculateArea = (length, width) => {
    let result = (length * width);
    return result;
}

let area = calculateArea(4,6);
console.log(area);