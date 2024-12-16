const student = [
    {
        name:"ram" ,
        email:"themailofram",
        phone:1234567890,
        address:"ktm" ,
        obtainedmarks: 300
        
    },
    {
        name:"shyam" ,
        email:"themailoshyam@gmail.com",
        phone:2345678901,
        address:"ktm" ,
        obtainedmarks: 450
    },
    {
        name:"hari" ,
        email:"themailofhari@gmail.com",
        phone:3456789012,
        address:"ktm" ,
        obtainedmarks: 200
    }
]
//for-in loop based on index and only run in array datatype
//i will give index of present loop
for(let i in student){
    console.log("student name=",student[i].name)
    console.log("student email=",student[i].email)
    console.log("student address=",student[i].address)
    console.log("student phone number=",student[i].phone)
    console.log("student obatined marks=",student[i].obtainedmarks)
    console.log("")
}

//for-of loop based on vale of index
//std will givethe present element of array inside loop
/*for (let std of student){
    console.log("student name=",std.name)
    console.log("student email=",std.email)
    console.log("student address=",std.address)
    console.log("student phone number=",std.phone)
    console.log("student obatined marks=",std.obtainedmarks)
    console.log("")
}*/