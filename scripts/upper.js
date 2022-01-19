function upper(){
    var data = [
        {
        image:" https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner5-Peri-peri-chicken.png",
    
    }, 
    {
        image:" https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner3-Paneer-Makhanwala-Parotta-Bowl.png",
    
    },  
    {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner2-Paneer-Makhani-Biriyani.png"
    } ,
    {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/11/Banner1-Fireworks-mushroom-corn-spaghetti.png"
    }   
     
     
    
    ]
    
    var arr = []
    
    data.map(function(item){
    arr.push(item.image)
    localStorage.setItem("slide", JSON.stringify(arr))
    })
    
    var i = 0;
    var id;
    
    var div = document.getElementById("imgtag_second")
    
    function startslide(){
    var img = JSON.parse(localStorage.getItem("slide"))
    img.src = img[0]
    
    
    id =  setInterval(function(){
        if(i === img.length){
            i = 1;
        }
        div.innerHTML = null;
        var imgtag = document.createElement("img");
        imgtag.setAttribute("src", img[i])
        imgtag.setAttribute("class", "imgtag")
    
        div.append(imgtag)
        
        i++;
    }, 5000)
    }
     
    startslide()
    
    
    
    
}

export default upper