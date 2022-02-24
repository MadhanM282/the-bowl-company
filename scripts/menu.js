

async function searching(url){
    
    try{
        let url = "http://localhost:2345/foods/?count=1";
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
    data.map((ele)=>{
        let div1 = document.createElement('div');

        let div2 = document.createElement('div');
        
    });
}


// searching()