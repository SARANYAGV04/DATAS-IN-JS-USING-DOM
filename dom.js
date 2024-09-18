class empDetails{
    person1 = {
        name: "Saranya",
        empId: 2020,
        address : {Address : "",cityName: "Palladam", district : "Tiruppur", pincode: 641605},
        pin: 641604,
        hobbies: ["Sleeping","Coding","Playing" ],
    };
    person2 = {
        name: "Bhuvana",
        empId: 2021,
        address : {Address : "",cityName: "Avinashi", district : "Tiruppur", pincode: 641603},
        pin: 641604,
        hobbies: ["Youtube","Coding","Playing" ],
    };
    person3 = {
        name: "Mohanapriya",
        empId: 2022,
        address : {Address : "",cityName: "Palladam", district : "Tiruppur", pincode: 641602},
        pin: 641604,
        hobbies: ["ReadingBooks","Coding","Youtube" ],
    };
    person4 = {
        name: "Shobika",
        empId: 1023,
        address : {Address : "",cityName: "Dharapuram", district : "Tiruppur", pincode: 641604},
        pin: 641604,
        hobbies: ["ReadingBooks","de-bugging","Playing" ],
    };
    person5 = {
        name: "Gokul",
        empId: 1024,
        address : {Address : "",cityName: "Uthukuli", district : "Erode", pincode: 648609},
        pin: 641604,
        hobbies: ["portraits","de-bugging","Playing" ],
    };
}

const employee = new empDetails();

let employ = document.querySelector("body");
let divTag1 = document.createElement('div');
divTag1.className="colorRed";
employ.appendChild(divTag1);
console.log(employ);




Object.keys( employee).map((det)=>{

let divTag2 = document.createElement("div");
divTag2.className="colorBlue";
divTag1.appendChild(divTag2);

let printName = document.createElement("h2");
printName.innerHTML = `Name: ${employee[det].name}`;
divTag2.appendChild(printName);

let printId = document.createElement("h3");
printId.innerHTML = `Employee Id: ${employee[det].empId}`;
divTag2.appendChild(printId)

let divTag3 = document.createElement("div");
divTag3.className="colorGreen";
divTag2.appendChild(divTag3);

// let del =document.createElement("button");
// del.className="btn";
// del.ariaPlaceholder="delete";
// divTag3.appendChild(del);


Object.keys(employee[det].address).map(addres=>{
    let printAddress=document.createElement("h3");
    printAddress.innerHTML= `${addres} : ${employee[det].address[addres]}`
    divTag3.appendChild(printAddress);
});

employee[det].hobbies.forEach(myHob=> {
    let printHobbies = document.createElement("span");
    printHobbies.innerHTML="hobbies" ;
    printHobbies.innerHTML= `${myHob} & `;
    divTag2.appendChild(printHobbies);
});


});
// function myFunc(){
//     document.getElementsByClassName("btn");
//     element.remove
// }