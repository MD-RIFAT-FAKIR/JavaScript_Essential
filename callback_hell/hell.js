/*When a asynchronous callbak function, callback another asynchronous callbak function,
then a occured nested callback this is callback hell*/


//step of making tea, where each next step depends on previous step

//boiling water
function boilWater (callback) {
    setTimeout(() =>{
        console.log("water has boiled.");
        callback();
    },2000);
}

//adding tealeave
function addTeaLeav (callback) {
    setTimeout(() =>{
        console.log("tealeaves added.");
        callback();
    },2000);
}

//adding sugar and milk
function addSugarMilk (callback) {
    setTimeout(() =>{
        console.log("sugar and milk added.");
        callback();
    },2000);
}

//pouring tea to cup
function pouringTea (callback) {
    setTimeout(() =>{
        console.log("pouring tea to cup.");
        callback();
    },2000);
}




//function cal
boilWater(function () {
    addTeaLeav(function () {
        addSugarMilk(function() {
            pouringTea(function () {
                console.log("Ready to serve.....");
            });
        });
    });
});