/*** When a function passed as a parameter to another function,
and called inside that function then, it is a callback function ***/


function calculataion(firstPaper, secondPaper, callbac) {
    setTimeout( () => {
        let result = (firstPaper + secondPaper);
        callbac(result);
    },2000);
}

function displayResult(result) {
    console.log(`Result:${result}`);
}


calculataion(50, 90, displayResult);

//text task for js thread
console.log("Result calculation completed!");


/*
output:
Result calculation completed!
Result:140 
*/


/*** #what is happening inside the code??? ***/


/*** This time execued (Result calculation completed!),
and,then executed calculataion() function
***/






/*** #Why is happening??? ***/


/*** For asynchronous execution callstack handover the calculataion() function to web api, after the delytime web api 
send calculation() functon to callback-queqe and then event-loop execute the calculataion() ***/


/*In this period of time js thread executes other instruction synchronously.so, that 
----> console.log("Result calculation completed!") executes first
----> then calculation() executes
*/







