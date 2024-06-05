
function askgender(){
    let gender =prompt("Enter your gender (male or female)")
    
    while(gender!="male"&& gender!= "female"){
        gender =prompt("please enter your gendar")
    }
    return gender;
}
let name = prompt("Please enter your name");
let gender = askgender();

if (gender === "male") {
    alert("Welcome Mr: " + name);
} else {
    alert("Welcome Ms: " + name);
}

let orderType = prompt("Do you want to order Donut, Coffee, Ice cream, or Bakery?");
let orderName = prompt("Please write the name of your order:");
alert("Your " + orderName + " is getting prepared!");
console.log(name + " ordered " + orderName + " (" + orderType + ").");

let user = [name, gender, orderType, orderName];
for (let i = 1; i < user.length; i++) {
    console.log(user[i]);
}
