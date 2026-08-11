/*** When a function passed as a parameter to another function,
and called inside that function then, it is a callback function ***/


function calculate (firstPaper, secondPaper, callback) {
    let result =  (firstPaper + secondPaper);

    callback(result);//callback function
}

function displayResult(result) {
    console.log(`Result:${result}`);
}

calculate(50, 90, displayResult);


//next task for js thread
console.log("Result calculataion completed!");


//when it is synchronous callbac the js thread execute callback function from the call-stack
