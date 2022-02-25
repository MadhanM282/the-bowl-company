 document.getElementById("btn1").addEventListener("click", login);
//   var userD = JSON.parse(localStorage.getItem("userData"));

//   function logIn() {
//     var email = document.getElementById("email").value;
//     var pass = document.getElementById("password").value;
//     var flag = 0;
//     for (var i = 0; i < userD.length; i++) {
//       if (userD[i].userEmail == email && userD[i].userPass == pass) {
//         flag = 1;
//       }
//     }
//     if (flag == 1) {
//       alert("Login Successful");
//       window.location = "";
//     } else {
//       alert("Wrong Credentials");
//     }

//     window.href = "signup.html";
// }
  

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

  window.location.href = "index.html";
  // console.log('info', info);
  

    // let token = info.token;

    // let email = document.querySelector("#uemail").value

    // getid(email,token)   

}

// async function getid(value,token){

//     let api = `https://masai-api-mocker.herokuapp.com/user/${value}`

//     let res = await fetch(api,{

//         headers: {
//             "Content-Type": 'application/json',
//             Authorization :`Bearer ${token}`
//         },

//     });

//     let data = await res.json()

//     console.log('data', data);

// }