let name = prompt("Please enter your name")
let gender =prompt("Enter your gender (male or female)")

while(gender!="male"&& gender!= "female"){
    gender =prompt("please enter your gendar")
}
if(gender==="male"){
alert("Welcome MR: "+name)
}
else{alert("Welcome Ms: "+name)}

let orderType = prompt("Do you want to order Donut, Coffee, Ice cream, or Bakery?");
let orderName = prompt("Please write the name of your order:");
alert("Your " + orderName + " is getting prepared!");
console.log(userName + " ordered " + orderName + " (" + orderType + ").");
