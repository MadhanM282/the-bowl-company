///check out button which redirect userto check out page
document.getElementById("checkout").addEventListener("click", () => {
   // let x = JSON.parse(localStorage.getItem("")) || [];
    //if(x.length==0){
     // myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; There is no product in cart to checkout`, false);
   // }else{
      window.location.href = "address.html";
    //}
  });


  ////cart update button which update the cart page
document.getElementById("updatecart").addEventListener("click", () => {
    window.location.href = "cart.html";
  });
  