/*unmber is a datatypes in js,
user to store both int and fload*/


let age = 25;
let weight = 52.540;
let negative = -10;


/*metod is a special function defined inside an object,
buidtin method are defined inside in java-machine.
*/



/*some useful method for Number*/

//isInteger() checks number fully integer
console.log(Number.isInteger(10));//         true
console.log(Number.isInteger(10.5));//       false


//parseInt() gives int number form string
console.log(parseInt("20:age"));//                        20

//parseFloat() gives float number form string
console.log(parseFloat("52.540:weight"));//               52.540

//toFix() keep digit after decimal according to deeded
let price = 99.568490;
console.log(price.toFixed(2));                          //99.57



/*Math object is a js builtin object,
used to calculation mathmameticl operation*/


//some useful Math obj are following
console.log(Math.round(4.3))//gives round value                  4
console.log(Math.round(4.6))//                                   5

console.log(Math.floor(4.9))//gives nearest small value          4

console.log(Math.ceil(4.1))//gives nearest maximum value         5

console.log(Math.max(20, 10, 30))//                              30
console.log(Math.min(20, 10, 30))//                              10

console.log(Math.sqrt(25))//gives square root vallue              5
console.log(Math.pow(2,3))//gives 2^3                             8

console.log(Math.random())//gives random values for 0 to 1 

console.log(Math.abs(-10))//gives absulate value shift negitive to positive        10


//generate random vaues between 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);