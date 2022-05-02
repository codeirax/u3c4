let searchNews = async(value)=>{

try{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
    let data = await res.json();
    console.log(data)
    return data;

}catch(err){
    console.log(err)
}

}


let append = (data,container) =>{
    data.map((elem)=>{
        let div = document.createElement("div")
        div.setAttribute("class","childDiv")
        let img = document.createElement("img");
        img.src = elem.urlToImage;
        
       
        let title = document.createElement("h4") 
        title.innerText = elem.title;
        let description = document.createElement("p");
        description.innerText = elem.description;

        let textDiv = document.createElement("div");
        textDiv.append(title,description)
        // console.log(description)
        div.append(img,textDiv);
        container.append(div)

    })
   
}

export {searchNews,append}