//promise in js//

//water boiling
function boilWater() {
    return new Promise( (resolve) => {
        console.log("Water in boiling......!");
        setTimeout( () => {
            console.log("Water has boiled.");
            resolve();
        },3000)
    });
}

//add teleaves and sugar
function addTeaSugar () {
    return new Promise (function (resolve) {
        console.log("adding tea leaves, sugar and milk.......");
        setTimeout( () => {
            console.log("added tea leaves, sugar and milk");
            resolve();
        },3000);
    });
}

//pouring into cup
function pourTea () {
    return new Promise( (resolve) => {
        console.log("pouring into cup.....");
        setTimeout( () => {
            console.log("ready to serve.");
            resolve();
        },3000);
    });
} 




//promise cahin
boilWater()
    .then(addTeaSugar)
    .then(pourTea)
    .then( () => {
        console.log("all step done!");
    });