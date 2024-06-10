// function askGender() {
//     let gender = prompt("Enter your gender (male or female)");
//     while (gender !== "male" && gender !== "female") {
//         gender = prompt("Please enter your gender (male or female)");
//     }
//     return gender;
// }

// let name = prompt("Please enter your name");
// let gender = askGender();

// if (gender === "male") {
//     alert("Welcome Mr: " + name);
// } else {
//     alert("Welcome Ms: " + name);
// }

// let orderType = prompt("Do you want to order Donut, Coffee, Ice cream, or Bakery?");
// let orderName = prompt("Please write the name of your order:");
// alert("Your " + orderName + " is getting prepared!");

// let user = [name, gender, orderType, orderName];

// let maneTage=document.createElement("div"),
//     container = document.getElementsByClassName("user-infor")[0];
//         maneTage.setAttribute("id","maneTage");
//         container.appendChild(maneTage);


//         let para=document.createElement("p");
//         maneTage.appendChild(para);
//         para.innerText=name;

// let orderList=document.createElement("ol");
// para.appendChild(orderList);

// for(i=0;i<3;i++){
//     let list=document.createElement("li")
//     orderList.appendChild(list)
//     if(i==0){
//         list.innerText=gender;
//     }
//     else if(i==1){list.innerText=orderType;}

//     else{ list.innerText=orderName;}
// }




document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let divmain = document.getElementById("user-infor");
    divmain.innerHTML = "";  // Clear previous entries

    let username = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let order = document.getElementById("order").value;
    let drink = document.querySelector('input[name="drinks"]:checked').value;

    let para1 = document.createElement("p");
    para1.innerHTML = "Your name: " + username;
    divmain.appendChild(para1);

    let para2 = document.createElement("p");
    para2.innerHTML = "Your age: " + age;
    divmain.appendChild(para2);

    let para3 = document.createElement("p");
    para3.innerHTML = "Your gender: " + gender;
    divmain.appendChild(para3);

    let para4 = document.createElement("p");
    para4.innerHTML = "Your order: " + order;
    divmain.appendChild(para4);

    let para5 = document.createElement("p");
    para5.innerHTML = "Your drink: " + drink;
    divmain.appendChild(para5);
});