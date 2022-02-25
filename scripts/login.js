 document.getElementById("btn1").addEventListener("click", logIn);
  var userD = JSON.parse(localStorage.getItem("userData"));

  function logIn() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var flag = 0;
    for (var i = 0; i < userD.length; i++) {
      if (userD[i].userEmail == email && userD[i].userPass == pass) {
        flag = 1;
      }
    }
    if (flag == 1) {
      alert("Login Successful");
      window.location = "";
    } else {
      alert("Wrong Credentials");
    }

    window.href = "signup.html";
  }