

async function searching(url){
    
    try{
        let url = "http://localhost:2345/foods/count=1";
        let res = await fetch (url);
        
        let data = await res.json();
        console.log('data', data);   
        // return data.meals;
    }
    catch(e){
        console.log('e', e);
    }
}

searching()