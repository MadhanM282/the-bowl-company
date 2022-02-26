let quentityArray;
let user = JSON.parse(localStorage.getItem("userData"));
//console.log(user);
/// Whenever user not login redirected to login page;
if (user == null || user.login == false) {
  alert("You have to login first");
  window.location.href = "login.html";
}

// container of all the cart product
let cartProduct = document.getElementById("cart-product");

//All the product which have in the bakend side;
let prodBag = JSON.parse(localStorage.getItem("data"));

/// Cart bag which added by the user
let cartBag = JSON.parse(localStorage.getItem("cart")) || [];
//console.log(cartBag)

/// calling the function to all the cart product on the page
showItem();

////implimenting the function os showin all the product

function showItem() {
  //// cart bag update
  cartBag = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cartBag)

  //// array to store the quentity to of all the product which user will give in input at cart page
  let quantityArray;

  /// to count in index of all the item in the product bag (it's usefull when user put the in put and then we have to see which index no wala product is selecting by the user)
  let indexCount = 0;

  //To collect total cart amount
  let totalAmount = 0;

  /// first clear the container of all the product to show again when user wants to chang the information.
  cartProduct.innerHTML = "";

  //console.log(cartBag)

  ////Array of items which have added by the same user which currently useing the site on same machin
  let userCart = [];
  //to collect the items which is have in main cart bag
  
  cartBag.forEach((el) => {
    //console.log(el.email)
    //if(user.email === el.email) {
      userCart.push(el);
      console.log(userCart)
   //}
  });

  ///whenever cart is empty
  if (userCart.length == 0) {
    cartProduct.innerHTML = `<h2>Nothing found in cart bag</h2>`;
  } else {
    /// whever cart is not empty
    //console.log(user.email)

    /// by default quantity array should be filled with one.
    quentityArray = [...Array(userCart.length).fill(1)];
    //console.log(quentityArray)

    // user cart array maping to show in product box.
    userCart.map((item, index) => {
      //console.log(item.email)
      if (user.email === item.email) {
        // filtering for same product id as original one
        let prod = prodBag.filter((el) => {
          if (item.id === el.id) {
            return true;
          }
        });
        //console.log(prod)

        ///main div
        let div = document.createElement("div");
       

        //image div
        let imgDiv = document.createElement("div");

        //title div
        let titleBtnDiv = document.createElement("div");
        titleBtnDiv.setAttribute("id", "title-btn");

        let img = document.createElement("img");
        img.src = prod[0].images[0];
        imgDiv.append(img);

        let title = document.createElement("h4");
        title.setAttribute("class", "tttt");
        title.textContent = prod[0].title;

        let remBtn = document.createElement("button");
        remBtn.textContent = "Remove";

        //// to remove the cart item from bag
        remBtn.addEventListener("click", () => {
          //console.log(index)
          cartBag.splice(index, 1);
          localStorage.setItem("cartItem", JSON.stringify(cartBag));
          myFunction(`<span class="iconify" data-icon="teenyicons:tick-circle-solid" style="color: #3c763d; font-size: 22px;"></span> &nbsp; Item removed`, true);
          //recalling the function to show the updated data.
          showItem();
        });
        titleBtnDiv.append(title, remBtn);

        let QuentityDiv = document.createElement("div");
        QuentityDiv.setAttribute("id", "quentity");
        let queInput = document.createElement("input");
        queInput.setAttribute("class", "inputnum");
        console.log(item.quantity, item);

        /// whenever quantity key is not present in cart bag.
        if (item.quantity == undefined || item.quantity == null) {
          queInput.value = 1;
        } else {
          // vice versa
          queInput.value = item.quantity;
        }

        queInput.type = "Number";
        QuentityDiv.append(queInput);

        //// span to cheack the index no of item which user have selected at the time of user iditing the imformation of quantity.
        let span = document.createElement("span");
        span.textContent = indexCount;
        //span.style.Display="none";
        queInput.addEventListener("blur", (e) => {
          //to target the value of input
          let num = e.target.value;

          //making no
          num = +num;

          //to target sapn value (span works for index identifying)
          let indexingofitem = e.target.parentNode.nextSibling.textContent;

          // indexingofitem=+indexingofitem;
          console.log(indexingofitem);

          // let num=document.querySelector(".inputnum").value;
          // console.log(num)

          //updating the quantity array.
          quentityArray[indexingofitem] = num;
          //console.log(indexingofitem)
          //console.log(num)

          /// to create discount value
          let x = Math.floor((prod[0].discount / 100) * prod[0].price);
          x = prod[0].price - x;
          let y = x;
          x = x * num;
          /// total amount updating.
          totalAmount += x - y;

          x = x.toFixed(2);
          //console.log(x,y)
          //console.log(x)
          amountDiv.textContent = `RS. ${x}`;
          //subtotal(userCart ,index,num);
          document.getElementById(
            "subtotal"
          ).textContent = `Rs. ${totalAmount.toFixed(2)}`;
          item.quantity = num;

          /// function which used for adding the quantity of eatch item.
          quantityAdder();
        });

        let amountDiv = document.createElement("div");
        amountDiv.setAttribute("id", "amount");
        let x = Math.floor((prod[0].discount / 100) * prod[0].price);
        x = prod[0].price - x;
        if (item.quantity) {
          x = x * item.quantity;
        }
        totalAmount += x;
        x = x.toFixed(2);
        //console.log(x)
        amountDiv.textContent = `RS. ${x}`;
        imgDiv.addEventListener("click",  () => {
          window.location.href = `productDetail.html?${prod[0].id}`;
        })
        //// appending all the div to the main contaier
        div.append(imgDiv, titleBtnDiv, QuentityDiv, span, amountDiv);
        //// appending all the div to the contaier of product
        cartProduct.append(div);
      }
      indexCount += 1;
    });
    //quantityAdder();
    //totalAmount=totalAmount.toFixed(2)
    document.getElementById(
      "subtotal"
    ).textContent = `Rs. ${totalAmount.toFixed(2)}`;
  }

  /// function which update the quantity of all the items in cart for future prefrence and update to localstorege
  function quantityAdder() {
    userCart.map((el, index) => {
      el.quantity = quentityArray[index];
    });

    localStorage.setItem("cartItem", JSON.stringify(userCart));
    console.log(userCart);
  }
}

///check out button which redirect userto check out page
document.getElementById("checkout").addEventListener("click", () => {
  let x = JSON.parse(localStorage.getItem("cartItem")) || [];
  if(x.length==0){
    myFunction(`<span class="iconify" data-icon="bx:bxs-error" style="color: maroon; font-size: 22px;"></span> &nbsp; There is no product in cart to checkout`, false);
  }else{
    window.location.href = "address.html";
  }
});

////cart update button which update the cart page
document.getElementById("updatecart").addEventListener("click", () => {
  window.location.href = "cart.html";
});



function myFunction(msg, type) {
  var popup = document.getElementById("myPopup");
  popup.innerHTML = msg;
  if(type)
  {
      popup.style.color="#3C763D";
      popup.style.backgroundColor = "#DFF0D8"; 
      popup.style.border = "2px solid #3C763D";
  }
  else
  {
      popup.style.color="maroon";
      popup.style.backgroundColor = "#F2DEDE"; 
      popup.style.border = "2px solid maroon";
  }
  popup.classList.toggle("show");

  const myTimeout = setTimeout(myGreeting, 3000);
  
  function myGreeting() {
 popup.classList.toggle("show");
}
  
}
  