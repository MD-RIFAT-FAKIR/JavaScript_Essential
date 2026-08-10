/***  filter() method filet array element based on some conditon.
it always retun true/false value and accordint to (true/false) select or reject element  ***/


let numbers = [1, 4, 7, 2, 8, 5, 9];


//get odd value after filtering

let oddElements = numbers.filter( (num) => {
    return num % 2 !== 0;
});

console.log(oddElements);//[ 1, 7, 5, 9 ]
console.log(numbers);//[1, 4, 7, 2, 8, 5, 9]




/*** filter() in array of object ***/

let students = [
    {name:"john", marks:68},
    {name:"heli", marks:93},
    {name:"doland", marks:35},
    {name:"casy", marks:96}
];


//details of student who has marks grater than or 90

let stdDetails = students.filter( (std) => {
    return std.marks >= 90;
});

console.log(stdDetails);//[ { name: 'heli', marks: 93 }, { name: 'casy', marks: 96 } ]