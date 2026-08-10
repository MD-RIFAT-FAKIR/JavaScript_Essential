/* map() method takes a reference array and preform some operaton,
then return a new array with the size of referance array */

let fruits = ['banana', 'mango', 'orange', 'lichi'];

let fruitsUpperCase = fruits.map( (name) => {//useing arrow function
    return name.toUpperCase();
});

console.log(fruitsUpperCase);//[ 'BANANA', 'MANGO', 'ORANGE', 'LICHI' ]

console.log(fruits);//['banana', 'mango', 'orange', 'lichi']         (original array)



let numbers = [2, 4, 6, 8, 10];

let doubleNumber = numbers.map( function (number, index) {//usnig normal function

    console.log(`index:${index}  element:${number}`);
    return number * 2;
    
});

console.log(doubleNumber);//[ 4, 8, 12, 16, 20 ] 
/*
output:
index:0  element:2
index:1  element:4
index:2  element:6
index:3  element:8
index:4  element:10
[ 4, 8, 12, 16, 20 ] 
*/

console.log(numbers);//[2, 4, 6, 8, 10]
