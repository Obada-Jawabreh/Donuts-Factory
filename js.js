function askGender() {
    let gender = prompt("Enter your gender (male or female)");
    while (gender !== "male" && gender !== "female") {
        gender = prompt("Please enter your gender (male or female)");
    }
    return gender;
}

let name = prompt("Please enter your name");
let gender = askGender();

if (gender === "male") {
    alert("Welcome Mr: " + name);
} else {
    alert("Welcome Ms: " + name);
}

let orderType = prompt("Do you want to order Donut, Coffee, Ice cream, or Bakery?");
let orderName = prompt("Please write the name of your order:");
alert("Your " + orderName + " is getting prepared!");

let user = [name, gender, orderType, orderName];

let maneTage=document.createElement("div");
        maneTage.setAttribute("id","maneTage");
        document.body.appendChild(maneTage);


        let para=document.createElement("p");
        maneTage.appendChild(para);
        para.innerText=name;

let orderList=document.createElement("ol");
document.body.appendChild(orderList);

for(i=0;i<3;i++){
    let list=document.createElement("li")
    orderList.appendChild(list)
    if(i==0){
        list.innerText=gender;
    }
    else if(i==1){list.innerText=orderType;}

    else{ list.innerText=orderName;}
}