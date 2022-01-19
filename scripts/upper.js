function upper(){
    var data = [
        {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner1-Butter-chicken-mac.png",
    
    }, 
    {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner5-Peri-peri-chicken.png",
    
    },  
    {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner1-Butter-chicken-mac.png"
    } ,
    {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner3-Paneer-Makhanwala-Parotta-Bowl.png"
    },
    {
        image:"https://www.thebowlcompany.in/wp-content/uploads/2021/10/Banner2-Paneer-Makhani-Biriyani.png"
    } 
     
     
    
    ]
    
    var arr = []
    
    data.map(function(item){
    arr.push(item.image)
    localStorage.setItem("slide", JSON.stringify(arr))
    })
    
    
    // var id;
    
    var div = document.getElementById("imgtag_second")
    
    function startslide(){
    var img = JSON.parse(localStorage.getItem("slide"))


    let image = document.createElement("img");
    image.src = img[0] 
    div.append(image)
    console.log(img)
        // image.setAttribute("src")
        let i = 1;
       setInterval( function(){
           if(i === img.length){
               i=0;
           }



           image.src = img[i]
           div.append(image)
           i++;
           
       },5000);
    // img.src = img[0]
    // console.log('img', img.src);
    // div.append
    
    // var imgtag = document.createElement("img");
    //     imgtag.src = img[0]
    //     var i = 0;
    
    // id =  setInterval(function(){
    //     if(i === img.length){
    //         i = 1;
    //     }
    //     div.innerHTML = null;
        
    //     imgtag.setAttribute("class", "imgtag")
    
    //     div.append(imgtag)
        
    //     i++;
    // }, 1000)

    }
     
    startslide()
    
    
    
    
}

export default upper