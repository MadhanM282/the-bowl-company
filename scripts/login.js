 document.getElementById("btn1").addEventListener("click", login);

async function login(e){

  e.preventDefault();

    let data_list = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    };

    data_list = JSON.stringify(data_list);
    console.log('data_list', data_list);

    let url = `http://localhost:2345/login`

  let responce = await fetch(url, {
    method: 'POST',
    body: data_list,
    headers: {
      "Content-Type": 'application/json',
    },

  });

  let info = await responce.json();

  console.log('info', info);
 
  
  let email = document.querySelector("#email").value;
  
  getid(email);   
  // window.location.href = "index.html";

}

async function getid(value){

    let api = `http://localhost:2345/users/email?email=${value}`

    let res = await fetch(api,{

        headers: {
            "Content-Type": 'application/json',
            // Authorization :`Bearer ${token}`
        },

    });

    let data = await res.json()

  console.log('data', data);
  localStorage.setItem("user_name",JSON.stringify(data)); // getting data from local storage
  let loginID = document.getElementById("log");
  loginID.style.color = "red";
  let loginame = JSON.parse(localStorage.getItem("user_name"));
  // var div = document.createElement("div");
  // var img = document.createElement("img");
  // img.src = "https://img.icons8.com/fluency-systems-filled/48/000000/guest-male.png";
  // var p = document.createElement("p");
  // p.innerHTML = loginame.name;
  // div.append(img, p);
  loginID.innerHTML = loginame.name;
  
}