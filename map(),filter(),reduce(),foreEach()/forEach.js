/*** foreEach() used to traverse full array and make some operation on element,
does't return any value ***/


let vlues = [-10, 3, 6, -4, 0, -8, 1];

vlues.forEach((element, index) => {
    if(element > 0) {
        console.log(`index:${index} element:${element}`);
    }
});




//foreEach in array of object
let users = [
    {name:"john", age:12},
    {name:"rony", age:17},
    {name:"donald", age:21},
    {name:"alex", age:10},
    {name:"mark", age:45},
    {name:"casy", age:19},
    {name:"lake", age:18},
];


users.forEach((user) => {
    if(user.age >= 18) {
        console.log(`${user.name} is adult he has age ${user.age}`);
    }
});