let cart_arr=JSON.parse(localStorage.getItem("cart"))||[]
  
  let cart_display=document.getElementById("cart_display")
  
  function append_cart(){
      let order_total=0
      cart_arr.forEach(function(item){
          
          
          let item_cover=document.createElement("div");
          item_cover.id="item_cover"
          let div1=document.createElement("div")
          div1.id="div1"
  
          let img=document.createElement("img");
          img.setAttribute("id","imgdish")
          img.src=item.image
  
          div1.append(img)
  
          let div2=document.createElement("div")
          div2.id="div2"
  
        
          let name=document.createElement("p");
          name.innerText=item.name       
          let size=document.createElement("p");
          size.innerText=`Category:${item.category}`
     
  
          div2.append(name,size)
  
          let div3=document.createElement("div")
          div3.id="div3"
  
          let price=document.createElement("h2");
          price.innerText=`$${item.price}.00 Rs`
  
          order_total+=(+item.price)
  
          let remove=document.createElement("button")
          remove.innerText="REMOVE"
          remove.className="underline"
          remove.addEventListener("click",function(){
              for(let i=0;i<cart_arr.length;i++){
              console.log(item.idMeal)
              if(cart_arr[i].name==item.name){
                  cart_arr.splice(i,1)
                 localStorage.setItem("cart",JSON.stringify(cart_arr))
              
                  location.reload()
                  break;
              }
  
          }
          })
  
          div3.append(price,remove)
  
          item_cover.append(div1,div2,div3);
          let hr=document.createElement("hr")
          cart_display.append(item_cover,hr) 
      });
  
  let total_cart=document.createElement("div");
  total_cart.id="total_cart"
  
  let div_a=document.createElement("div")
  let p1=document.createElement("p")
  p1.textContent="Total"
  
  let p2=document.createElement("p")
  p2.textContent="Shipping estimate"
  
  let p3=document.createElement("h2")
  p3.textContent="Order Total"
  p3.className="bold_txt"
  
  div_a.append(p1,p2,p3)
  
  
  let div_b=document.createElement("div")
  let p4=document.createElement("p")
  p4.textContent=`$${order_total}.00 Rs`
  let p5=document.createElement("p")
  p5.textContent="Calculated at Checkout"
  
  let p6=document.createElement("h2")
  p6.textContent=`$${order_total}.00 Rs`
  p6.className="bold_txt"
  
  div_b.append(p4,p5,p6)
  
  total_cart.append(div_a,div_b)
  
  cart_display.append(total_cart)
  
  
  let user_name=document.getElementById("user_name");
  
  let loged_in=JSON.parse(localStorage.getItem("loged_in"));
  
  user_name.innerText=loged_in;
  
  
  
  
  }
  
  append_cart()
  
  let proceed_btn =document.getElementById("proceed_btn");
  proceed_btn.addEventListener("click",function(){
      
      window.location.href="address.html"
  })