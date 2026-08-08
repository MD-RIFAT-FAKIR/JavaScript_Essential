/*oprerators are symbols used to perform some operation,
on one or more oparend*/

//arithmatic operator
//(+, -, *, /, %, **)

let a = 10; let b = 2;

let sum       = (a + b); //addition 12
let sub       = (a - b); //subtraction 8
let mul       = (a * b); //multiplication 20
let div       = (a / b); //division 5
let remainder = (a % b); //modulo operator gives remainder 0
let pow       = (a ** b); //exponent operator gives power value 100

console.log(sum, sub, mul, div, remainder, pow);




/*assignment operators,
  used to assign value to a variable
*/

//(= , +=, -=, /=, *=, %=) 

let num  = 20;

    num += 10;//add 10 with num and asigned into num          30
    num -= 10; //subtract 10 from num and assigned into num   20
    num /= 2; //divide num by 2 and assiged into num          10
    num *= 2; //multiply num by 2 and assigned into num       20
    num %= 2; //dive num by 2 and get the remainder           0




/*compare operator,
used to compare between two or more oprerand*/

//(==, !=, !==, ===, >, <, >=, <=)

let firstNum  = 10;
let secondNum = "10";

console.log(firstNum == secondNum);//chek value only not type                    true
console.log(firstNum != secondNum);//check value only not type                   false
console.log(firstNum !== secondNum);//strictly check value as well as type       true
console.log(firstNum === secondNum);//strictly check value as well as type       false
console.log(firstNum  > secondNum);//                                            false
console.log(firstNum  < secondNum);//                                            false
console.log(firstNum >= secondNum);//                                            true 
console.log(firstNum <= secondNum);//                                            true



/*logical operators*/
//(&&, ||, !)

let a = 10;
let b = 2;
let istrue = true;

console.log(a > 5 && b > 5);//both case have to be satisfy               false
console.log(a > 5 || b > 5);//only single case has to be satisfy         true
console.log(!istrue)//gives opposite value                               false


//unary operator
//(++ , --)

let value = 10;
    ++value;
    console.log(value);
    value--;

console.log(value);//     10
