// let data = JSON.parse(localStorage.getItem("GameData"));
// console.log('data', data);

// async function searchList() {
//     let res = await fetch();
//     let dat = await res.json();
//     console.log('data', dat);
//     // displayGame(dat)
//     // console.log('results', dat);
   

// }
searchList();

async function searchList() {
  try {
      
        let res = await fetch(`http://localhost:2345/name/${data}`);
        let data = await res.json();

         return data;
    } catch (error) {
        console.log('error', error);
        
    }
}
// let displayGame = (data) => {
//     var path = document.querySelector("#searchd");
    
//         var div = document.createElement("div");
//         var title = document.createElement("h2");
//         title.textContent = data.name;
//         var image = document.createElement("img");
//         image.src = data.background_image;
//         div.append(title, image);
//         path.append(div);
         
// }