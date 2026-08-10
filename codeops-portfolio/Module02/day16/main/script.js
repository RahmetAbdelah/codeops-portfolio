let bill= prompt("enter bill:")
let num= prompt("enternumber of people:")
bill=Number(bill)

if(bill>300){
    let total=bill+(bill*0.1);
}
else if(bill<300){
    let total=bill+(bill*0.05);
    
}



let total=bill+(bill*0.1);
let portion=total/num

for(let i=1;i<=num;i++){
   console.log("person "+ i +" ows "+ portion+" ETB")
}


