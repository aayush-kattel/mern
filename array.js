//index is used in array but key value is used in object
/*
let user_1=["aayush", "themailofaayush@gmail.com", "kerabari-9,devijhoda", 9801476536]
console.log(user_1[0])
console.log(user_1[1])
console.log(user_1[2])
console.log(user_1[3])


let user_obj_1={
    name: "aayush",
    email: "themailofaayush@gmail.com",
    address: "kerabari-9,devijhoda",
    number: 9801476536
}
console.log(user_obj_1.name)

const product_1={
    name:'product-1',
    price:1000,
    discount:10,
    catagory:"cat1"
}

const product_2={
    name:'product-2',
    price:1500,
    discount:5,
    catagory:"cat2"
}


const allproduct=[
    {
    name:'product-1',
    price:1000,
    discount:10,
    catagory:"cat1"
    },

    {
        name:'product-2',
        price:1500,
        discount:5,
        catagory:"cat2"
    }
]
console.log(allproduct[0].name)

*/
//Q. create an array of objects to store profile of student
//your object data should contain name, email , address, phone , college name
//your array should contain 3 number of student
//print :
// Name:
// Address:
// Email:
// Phone:
// College name:
//

const student_1=[
    {
   Name:"Ram",
   Address:"ktm",
   Email:"ram@gmail.com",
   Phone:"9811111111",
   Collegename:"kcc"
    },
    {
   Name:"hari",
   Address:"ktm",
   Email:"hari@gmail.com",
   Phone:"9822222222",
   Collegename:"kcc"
    },
    {
    Name:"shyam",
   Address:"ktm",
   Email:"shyam@gmail.com",
   Phone:"9833333333",
   Collegename:"kcc"
    }
]
console.log(student_1[0])
console.log("")
console.log(student_1[1])
console.log("")
console.log(student_1[2])
console.log("")


const alluser=[]//empty
// Insert value
// a. At top/first
// b. At bottom/last
// c. At any position

const user_1={
    name:"",
    address:"",
    email:""
}
const user_2={
    name:"",
    address:"",
    email:""
}
// At last
alluser.push(user_1, user_2)
//At first
alluser.unshift(user2)
//(0==>new , 0==>1, 1==>2)
//At any
//[0, 1, 2]
alluser.splice(1, 1, user_2)

//[0,1,2,3,]
//update
alluser[5]=user_1  //create
//[0,1,2,3,<empty>,5]

alluser[2]=user_2  //replace


alluser[2].name="update name"







//remove
//top
//last
//any position

const top=alluser.shift()

const last=alluser.pop()

//[0,1,2,3,4,5]
const any=alluser.slice(1, 1)
//[0,2,3,4,5]







let arr=[]
arr[1]="value1"//[<empty> , 1]
arr.slice(1,1) //[<empty>]
arr[0]="newvalue"//[newvalue]
arr.slice(0,1) //[]


//length
console.log(alluser.length)



let ImageExts=['jpg', 'png', 'gif', 'svg']
let ext="png"

console.log(ImageExts.includes(ext))