var user_detail = JSON.parse(localStorage.getItem("user_name"));
var adddelivery = JSON.parse(localStorage.getItem("Deliveryadd"));
//console.log(adddelivery);
console.log(user_detail.email);

 var contact = document.getElementById("con");
 var shipadd =  document.getElementById("addre");

 var current_user_add = adddelivery[adddelivery.length-1];
 console.log(current_user_add);
 var current_user_email = user_detail.email;
 console.log(current_user_email);
 contact.innerHTML = current_user_email;
 console.log(current_user_add)
 shipadd.innerHTML = current_user_add.address_one;





