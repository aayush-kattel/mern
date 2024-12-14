/*
*Mathematical operator (+,-,/,%)
*increment decrement 
*string/concatination
*assignment
*comperision
*logical
*conditional / Ternary ( (exp) ? "" : "")
*Template literals (`${}`)
*Spread and rest
*object declaration (declaration type{key ,...rest}=object data)
*/

/*
let a=3
let b=10

c=b/a   //3.333333333333
d=b%a   // 1 (reminder)

a++
++a
console.log(a++)
console.log(++a)

let name ="aayush"
let lname ="kattel"
name += lname

let greeting ="hello " +name+ "how are you"
greeting +="thanks"

x=10
y='10'

console.log(x>=y)  //true
console.log(x==y) //true
console.log(x===y) //false
console.log(x!=y)  //false
console.log(x!==y)  //true

console.log((x>=y) && (x==y))
console.log((x>=y) || (x===y))
console.log(!(x>=y))

x=12
console.log((x>10) ? "x is greater than 10" : "x is less than 10")


let name ="aayush"
let lname ="kattel"
name += lname

let greeting =`hello ${name} how are you  
thanks`// Template literals


const student =["student1, student2"]
const aayush =[...student,"student3"]
*/
const user = {
    name: "aayush kattel",
    email: "themailofaayushkattel@gmail.com",
}

const admin ={
    ...user,
    phonenumber: "9801476536"
}
