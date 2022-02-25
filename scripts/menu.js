

async function searching(){
    
    try{
        let url = "http://localhost:2345/foods/?count=4";
        let res = await fetch (url);
        
        let data = await res.json();
        console.log('data', data);   
        // return data.meals;
        display(data)
    }
    catch(e){
        console.log('e', e);
    }
}


async function category(i){

    // const cat = document.querySelector("#hh14").innerHTML
    let arr = ["Breakfast Bowls","Continental Bowls","Desserts","Family Combos","Fruit Bowls","Indian Bowls","Oriental Bowls","Parotta Bowls","Value Meals"]
    // console.log('cat', cat);
    try{
        let url = `http://localhost:2345/category/${arr[i]}`;
        console.log(arr[i])
        let res = await fetch (url);
        
        let data = await res.json();
        console.log('data', data);   
        // return data.meals;
        display(data)
    }
    catch(e){
        console.log('e', e);
    }
}




function display(data){
    let main = document.querySelector("#fithdiv")
    main.innerHTML = null
    let arr = []
    data.map((ele)=>{
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        div1.setAttribute('class', 'image')

        let img = document.createElement('img');
        img.setAttribute('class', 'image__img');
        img.src = ele.image;

        let div2 = document.createElement('div');
        div2.setAttribute('class', 'image__overlay image__overlay--primary')
        // div2.setAttribute('class', );

        let p = document.createElement('p');
        p.setAttribute('class', 'image__description')
        p.innerHTML = ele.description

        div2.append(p);


        let name = document.createElement('h3');
        name.setAttribute("class","downname")
        name.innerHTML= ele.name;

        let price = document.createElement('h4')
        price.innerHTML= `₹${ele.price}`
        let button = document.createElement('button');

        button.addEventListener('click',cart);

        function cart(){
            arr.push(ele)
            localStorage.setItem('cart', JSON.stringify(arr));
        }

        button.innerHTML= "Add+"

        const namediv = document.createElement('div');
        namediv.setAttribute('class', 'namediv')

        namediv.append(price,button)
        // div3.append(name);

        div1.append(img,div2);
        div.append(div1,name,namediv)

        main.append(div);
        // console.log('ele',ele)
    });
}


searching()