/* js has two special loop,
one is (for... in) specially used in object,
onether is (for... of) specially used to travers array without index*/


//(for... of) loop

let fruits = ['mango', 'orange', 'banana', 'papaya'];

for(let fruit of fruits) {
    console.log(fruit);
}



//(for... in) 

let teacher = {
    name : "YjaHu",
    phone : "980-493-827",
    course : {
        course1 : "math",
        course2 : "sicence"
    }
}


for(let key in teacher) {
    if(key === "course") {
        for(let courseKey in teacher.course) {
            console.log(`${courseKey} = ${teacher.course[courseKey]}`);
        }
    }else{
        console.log(`${key} = ${teacher[key]}`);
    }
}