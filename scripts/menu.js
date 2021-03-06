let count = 1;
if (count < 2) { searching() }
else if (count > 2) {
    load();
}
function load() {
    count++;
    searching();
}


async function searching() {
    
    try{
        let url = `https://the-bowl-company-pro.herokuapp.com/foods/?count=${count}`;
        let res = await fetch (url);
        
        let data = await res.json();
        console.log('data', data);   
        // return data.meals;
        display(data);
    }
    catch(e){
        console.log('e', e);
    }
}
async function category(i){
    let arr = ["Breakfast Bowls","Continental Bowls","Desserts","Family Combos","Fruit Bowls","Indian Bowls","Oriental Bowls","Parotta Bowls","Value Meals"]
    // console.log('cat', cat);
    try{
        let url = `https://the-bowl-company-pro.herokuapp.com/category/${arr[i]}`;
        console.log(arr[i]);
        let res = await fetch (url);
        
        let data = await res.json();
        console.log('data', data);   
        // return data.meals;
        display(data);
    }
    catch(e){
        console.log('e', e);
    }
    const load = document.querySelector("#button3")
    load.style.display = 'none';
}

async function switc(){
    let url = `https://the-bowl-company-pro.herokuapp.com/type/veg`
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log('data', data);
        display(data)
    } catch (error) {
        
    }
}
// switc()

function display(data){
    let main = document.querySelector("#fithdiv");
    main.innerHTML = null;
    let arr = JSON.parse(localStorage.getItem("cart")) ||[];
    data.map((ele)=>{
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'image');

        let img = document.createElement('img');
        img.setAttribute('class', 'image__img');
        img.src = ele.image;

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'image__overlay image__overlay--primary');
        // div2.setAttribute('class', );

        let p = document.createElement('p');
        p.setAttribute('class', 'image__description');
        p.innerHTML = ele.description;

        div2.append(p);

        let typedive = document.createElement('div');
        typedive.setAttribute('class', 'typediv')
        
        // typedive.class = "typediv"

        let name = document.createElement('h3');
        name.setAttribute("class", "downname");
        name.innerHTML= ele.name;

        let svg = document.createElement('img');
        if(ele.type === "veg"){
            svg.src = "https://img.icons8.com/ios-glyphs/30/26e07f/non-vegetarian-food-symbol.png";  
        }
        else if(ele.type === "nonveg"){
            svg.src = "https://img.icons8.com/ios-glyphs/30/ed1c24/non-vegetarian-food-symbol.png";

        }
        let price = document.createElement('h4');
        price.innerHTML = `???${ele.price} /-`;
        let button = document.createElement('button');

        button.addEventListener('click',cart);

        function cart(){
            arr.push(ele);
            localStorage.setItem('cart', JSON.stringify(arr));
            button.style.backgroundColor = "#ff7a00";
        }
        typedive.append(svg,name)

        button.innerHTML = "Add+";

        const namediv = document.createElement('div');
        namediv.setAttribute('class', 'namediv');

        namediv.append(price, button);
        // div3.append(name);

        div1.append(img,div2);
        div.append(div1, typedive, namediv);

        main.append(div);
        // console.log('ele',ele)
    });
}


