/*
*Decision making statement
*if-else
*else-if
*switch
*integrated or looping
*Do-while
*While
*for
*for-in
*for-of
*/
/*
//nesting
let x=10
if(x>=10){

    if(x<=30){
        //
    }
}
else{
    //
}


//nesting
let day='sunday'
if(day==='saturday'){
    console.log("holiday")
}
else{
    if(day==='friday'){
       console.log("weekend")
    }
    else{
        console.log("weekday")
    }
}


//else if
if(day==='saturday'){
    console.log("holiday")
}
else if(day==='friday')
{
    console.log('weekend')
}
else{
    console.log("weekday")
}

*/

//(Q) create an object named student
//assign name, email id and marks obtained
//print percentage if total marks is 500
//print division based on percentage
//Given,
//percentage >=80 destinction
//percentage <80 and  >=60 first division
// percentage <60 and  >=45 second division
//percentage <45 and  >=35 third division
//percentage <35 sorry you are failed

 /*
let student={
    Name: "ram",
    email:"themailofram@gmail.com",
    marks:200
}
let t=500
let p=student.marks/t*100
if(p>=80){
    console.log("destinction")
}
else if((p>=60) && (p<80)){
    console.log("first division")
}
else if((p>=45) && (p<60)){
    console.log("second division")
}
else if((p>=35) && (p<45)){
    console.log("third division")
}
else{
    console.log("sorry you are failed")
}
   

if(p>=80){
    console.log("first division")
}
else{
    if(p>=60){
        console.log("first division")
    }
    else{
        if(p>=45){
            console.log("second division")
        }
        else{
            if(p>=35){
            console.log("Third division")
            }
            else{
                console.log("sorry you have failed")
            }
        }
    
    }

   
}




//calculate electricity bill of 300 unit 
//for first 20 units, Npr=80
//for next 20 unit , Npr= 5 per unit
//for next 30 unit , Npr= 7 per unit
//for next 50 unit , Npr= 10 per unit
//for next 100 unit , Npr= 15per unit
//avove that , Npr= 20 per unit

let u=350
let bill
if(u<=20){
    console.log("bill="+ 80)
}
else if(u<=40){
    bill=80+(u-20)*5
    console.log("bill="+bill )


}else if(u<=70){
    bill=80+100+(u-40)*7
    console.log("bill="+bill)
}
else if(u<=120){
    bill=80+100+210+(u-70)*10
    console.log("bill="+bill)
}
else if(u<=220){
    bill=80+100+210+500+(u-120)*15
    console.log("bill="+bill)
}
else{
    bill=80+100+210+500+1500+(u-220)*20
    console.log("bill="+bill)
}
*/




//task
//find annual salary after tax
//find monthly salary after tax
//find annual tax to paid
//find monthly tax to paid
//if a software developer earns 5000000 yearly without tax
//if s<5L tax=1%
//if s is more 2l tax=15%
//if s is more 3l tax=20%
//if s is more 10l tax=25%
//if s is more 15l tax=30%
//above tax=36%

/*
let as=5000000
let tax
let annual
if(as<=500000){
    tax=as/100*1
    annual=as-tax
    console.log("tax="+tax)
    console.log("annual salary after tax="+annual )
    console.log("monthly tax to paid=",tax/12)
    console.log("monthly salary after tax=",as/12)
}
else if(as<=700000){
    tax=5000+(as-500000)/100*15
    annual=as-tax
    console.log("tax="+tax )
    console.log("annual salary after tax="+annual )
    console.log("monthly tax to paid=",tax/12)
    console.log("monthly salary after tax=",as/12)
}
else if(as<=1000000){
    tax=5000+2000*15+(as-700000)/100*20
    annual=as-tax
    console.log("tax="+tax )
    console.log("annual salary after tax="+annual )
    console.log("monthly tax to paid=",tax/12)
    console.log("monthly salary after tax=",as/12)
}
else if(as<=2000000){
    tax=5000+2000*15+3000*20+(as-1000000)/100*25
    annual=as-tax
    console.log("tax="+tax )
    console.log("annual salary after tax="+annual )
    console.log("monthly tax to paid=",tax/12)
    console.log("monthly salary after tax=",as/12)
}
else if(as<=3500000){
    tax=5000+2000*15+3000*20+10000*25+(as-2000000)/100*30
    annual=as-tax
    console.log("tax="+tax )
    console.log("annual salary after tax="+annual )
    console.log("monthly tax to paid=",tax/12)
    console.log("monthly salary after tax=",as/12)
}
else{
    tax=5000+2000*15+3000*20+10000*25+15000*30+(as-3500000)/100*36
    annual=as-tax
    console.log("tax="+tax )
    console.log("annual salary after tax="+annual )
    console.log("monthly tax to paid=",tax/12)
    console.log("monthly salary after tax=",as/12)
}




//Switch statement
const day="monday"
switch(day)
{
    case "saturday" :
        console.log("holiday")
        break;
    case "friday" :
        console.log("weekend")
        break;
    default :
        console.log("weekday")
        break;
 
}
*/

let student={
    Name: "ram",
    email:"themailofram@gmail.com",
    marks:250
}
let t=500
let p=student.marks/t*100
if(p>=80){
    division= "destinction"
}
else if((p>=60) && (p<80)){
    division="first division"
}
else if((p>=45) && (p<60)){
    division="second division"
}
else if((p>=35) && (p<45)){
    division="third division"
}
else{
    division="failed"
}
   
switch(division){
    case "destinction":
    console.log("destionsion")
    break;
    case "first division":
    console.log("first division")
    break;
    case "second division":
    console.log("second division")
    break;
    case "third division":
    console.log("third division")
    break;
    case "failed":
    console.log("sorry you are failed!")
    break;
    default:
    console.log("invalid input")
    break;
}

