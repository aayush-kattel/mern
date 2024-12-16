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

const size = student.length;
for(let i=0; i< size ;i++){
    console.log("student name=",student[i].name)
    console.log("student email=",student[i].email)
    console.log("student address=",student[i].address)
    console.log("student phone number=",student[i].phone)
    console.log("student obatined marks=",student[i].obtainedmarks)
    console.log("student percentage=", student[i].obtainedmarks/5)
    if(student[i].obtainedmarks/5>=80){
        console.log("Destinction")
    }
    else if(student[i].obtainedmarks/5>=60){
        console.log("first division")
    }
    else if(student[i].obtainedmarks/5>=45){    
    console.log("second division")
    }
    else if(student[i].obtainedmarks/5>=35){
        console.log("third division")
    }
    else{
        console.log("sorry you are failed!")
    }
    console.log("")
}