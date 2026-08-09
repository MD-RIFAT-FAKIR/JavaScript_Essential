/* object is collection of data,where each data has a property called key */
//object combined with key and value pair


let student = {
    name       : "rifat",
    age        : 25,
    isPassword : true
}

console.log(student.name);//rifat
console.log(student.age);//25


//add and update existign property in object
student.address = "dhaka";//add
student.age = 24;//update
console.log(student.age);//24
console.log(student.address);//dhaka

//delete property form object
delete student.isPassword;
console.log(student);//{ name: 'rifat', age: 24, address: 'dhaka' }


//nested object
let student2 = {
    name : "jack",
    age  : 25,
    address: {
        city : "dhaka",
        country : "BD"
    }
}

console.log(student2);//{ name: 'jack', age: 25, address: { city: 'dhaka', country: 'BD' } }


//array inside object
let student3 = {
    name : "john",
    age  : 23,
    course : ["eng", "math", "physics"]
}
console.log(student3.course[0]);//eng


//get all keys and values of object
console.log(Object.keys(student3));//[ 'name', 'age', 'course' ]
console.log(Object.values(student3));//[ 'john', 23, [ 'eng', 'math', 'physics' ] ]


//check key in object
console.log("name" in student);//true
console.log("age" in student);//true


//loop in object
for(let key in student) {
    console.log(`${key} = ${student[key]}`);
}