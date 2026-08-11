/* async/await is easy and clean way to use promises */


//user promises
function User () {
    return new Promise( (resolve) => {
        setTimeout( () => {
            console.log("user found..!");
            resolve({id:1, name:"rifat"});
        },5000);
    });
}

//post promises
function Post () {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            console.log("Post found.!");
            resolve(["post1", "post2"]);
        },5000);
    });
}




// (async/await)
async function getAllDataSequentail () {

    console.log(`start time : ${new Date().toLocaleTimeString()}`);//print local taime

    let user = await User();//wait for resolve then go for next

    let post = await Post();//wait for resolve

    console.log(`end time : ${new Date().toLocaleTimeString()}`);////print local taime

    console.log(user, post);//print resolve values
}
getAllDataSequentail();