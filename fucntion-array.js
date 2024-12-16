function addnumber(a,b=0){
    const c= a+b
    const d=a-b
    return {c,d};
}

let x=10;
let y=20;

const result= addnumber(x,y)
console.log(result.c);
console.log(result.d)


const {c,d}= addnumber(x,y)
console.log(c);
console.log(d)