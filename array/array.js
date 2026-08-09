/*array is a linear data structure,
that can store mutiple values is a single variabel,
and using index can access each element of that variable*/

let fruits = ['mango', 'banana', 'orange'];


//#note: in js we can add and remove element in both side

//push for add elemet from end
fruits.push('lichi');
console.log(fruits);//[ 'mango', 'banana', 'orange', 'lichi' ]


//remove element from end
fruits.pop();
console.log(fruits);//[ 'mango', 'banana', 'orange' ]


//add element from start index
fruits.unshift('watermallon');
console.log(fruits);//[ 'watermallon', 'mango', 'banana', 'orange' ]


//remove element form start index
fruits.shift();
console.log(fruits);//[ 'mango', 'banana', 'orange' ]



//sort a unsorted array using sort method
let marks = [68, 89, 55, 90, 92, 23, 56,97, 42];
console.log(marks.sort());

//we can traver an array with indecies in js using (for...of) loop
for(let mark of marks) {
    if(mark >= 90) {
        console.log(`marks is ${mark} got A+.`);
    }
}


//we can reverse an array using reverse function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.reverse());//[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


//conver array into string
let drinks = ['cocacola','sprint','mojo'];
console.log(drinks.join(', '));// cocacola, sprint, mojo