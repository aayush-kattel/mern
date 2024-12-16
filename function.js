//logical code block
/*
const student=[
    {
        name: "ram",
        marksobt: 300
    },
    {
        name:"shyam",
        marksobt:200,
    }
]
function getPercentage(marksobt){
    return marksobt/5;
}

function getDivision(per){
if(per>=80){
    return "distinction "
}else if (per>=60){
    return "first division"
}else if (per>=45){
    return "second division"
}else if (per>=35){
    return "third division"
}else{
    return "you are failed!"
}
}

function print(std){
    console.log("name=",std.name)
    console.log("marks obtained =",std.marksobt)
    console.log("percentage=",std.percentage)
    console.log("division=",std.division)
    console.log("------------------------------")
}

for(let  std of student){
    const per=getPercentage(std.marksobt)
    std['percentage']=per;
    
    const division = getDivision(per)
    std['division']=division;

    print(std)
}
*/

//calculate electricity bill of following data
const household =[
    {
        name:"owner1",
        unit:150,
    },
    {
        name:"owner2",
        unit:25,
    },
    {
        name:"owner3",
        unit:75,
    },
    {
        name:"owner4",
        unit:250,
    },
]
function getbill(unit){
if(unit<=20){
    return 80;
}else if(unit<=40){
    return 80+(unit-20)*5;
}else if(unit<=70){
    return 80+100+(unit-40)*7;
}else if(unit<=130){
    return 80+100+210+(unit-70)*10;
}else if(unit<=230){
    return 80+100+210+500+(unit-130)*15;
}else {
    return 80+100+210+500+1500+(unit-230)*20;
}
}

function print (house){
    console.log("name=",house.name)
    console.log("unit=",house.unit)
    console.log("bill=",house.bill)
    console.log("------------------------")
}
for (let house of household){
const bill=getbill(house.unit)
house['bill']=bill

print(house)

}


//for first 20 units, Npr=80
//for next 20 unit , Npr= 5 per unit
//for next 30 unit , Npr= 7 per unit
//for next 50 unit , Npr= 10 per unit
//for next 100 unit , Npr= 15per unit
//avove that , Npr= 20 per unit