 
var adddelivery = JSON.parse(localStorage.getItem("Deliveryadd")) || [];
document.getElementById("return_to_shipping").addEventListener("click",function() {
    var addressObj = {
        country:form.use_address1.value,
        firstname: form.first_name.value,
        lastname: form.last_name.value,
        address_one: form.address_1.value,
        address_two: form.address_2.value,
        city: form.city.value,
        state: form.state_name.value,
        pincode: form.pin_code.value,
        phonenum: form.phone_num.value,
        saveInfo: form.save_info.value,
        //email:user_detail.email
    };
   
    console.log(addressObj);
    adddelivery.push(addressObj)
    console.log(adddelivery)
    localStorage.setItem("Deliveryadd", JSON.stringify(adddelivery));
    window.location.href = "shiping2.html";
})

//returns to the cart page
document.getElementById("return_to_cart")
.addEventListener("click", function () {
   window.location.href = "cart.html";
});

