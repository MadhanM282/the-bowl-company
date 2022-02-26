
document.getElementById("btn1").addEventListener("click", reg);

async function reg(event){

try{

    event.preventDefault();

    var reg_data = {
        first_name: document.querySelector("#fname").value,
        last_name: document.querySelector("#lname").value,
        mobile_number: document.querySelector("#mob").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    };

    reg_data = JSON.stringify(reg_data)
    console.log('reg_data', reg_data);

}

catch(e){
    console.log('e', e);
}

let regApi = `http://localhost:2345/register`

let res = await fetch(regApi, {
    method: "POST",
    body: reg_data,
    headers: {
        "Content-Type": 'application/json'
    },

});

let data = await res.json()
console.log('data', data);
window.location = "login.html";
}