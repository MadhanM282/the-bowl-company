 document.getElementById("btn1").addEventListener("click", login);

async function login(e){

  e.preventDefault();

    let data_list = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    };

    data_list = JSON.stringify(data_list);

    let url = `http://localhost:2345/login`

  let responce = await fetch(url, {
    method: 'POST',
    body: data_list,
    headers: {
      "Content-Type": 'application/json',
    },

  });

  let info = await responce.json();

  localStorage.setItem("userData",JSON.stringify(info));
  
  let email = document.querySelector("#email").value;
  
  getid(email);   
  if(info.message==='Please try another email or password') {
    alert('Please try another email or password')
  }else{
    window.location.href = "index.html";
  }

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

  localStorage.setItem("user_name",JSON.stringify(data));

  let loginID = document.getElementById("log");

  let loginame = JSON.parse(localStorage.getItem("user_name"));
  
  
  loginID.innerHTML = loginame.name;
}