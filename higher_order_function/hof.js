/* (when a function takes another function as a parametr), or  (a function return another function),
    or (when does both then that functon called higher order function);
*/



//function takes anoter function as parameter

function repetHello (times, hello) {
    for(let i = 0; i < times; i++) {
        hello();//call hello function
    }
}

//function
function hello() {
    console.log("Hello...");
}

repetHello(3, hello);//passing hello functon as argumnt





//functon returns another functon
function createGreeting (word) {
    return function (name) {
        return (word + " " + name);
    }
}

let sayHi = createGreeting("Hi");
console.log(sayHi("karim"));