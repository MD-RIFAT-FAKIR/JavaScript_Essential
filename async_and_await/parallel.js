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



//when promise are not interdependent

//get users all data parallel
async function getAllDataParallel () {

    console.log(`start time : ${new Date().toLocaleTimeString()}`);

    const [user, post] = await Promise.all([
        User(),//resolve parallel
        Post()//resolve parallel
    ]);

    console.log(`end time : ${new Date().toLocaleTimeString()}`);

    console.log(user, post);//print resolve values
}

getAllDataParallel();
