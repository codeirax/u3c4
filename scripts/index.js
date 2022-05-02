// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
const inUrl = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"

const Def_url = "https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

import { searchNews , append } from "./fetch.js";

// by searching 


let search  =(e)=>{

    getData(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
 
    if(e.key === "Enter"){
       let value = document.getElementById("search_input").value;
        console.log(value)
        window.location.href="search.html"
       getData(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
    }
}

document.getElementById("search_input").addEventListener("keydown",search)
// default data showing for india

let getData = (url) =>{
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        console.log("res",res)
        showNews(res.articles)

    }).catch(function(err){
        console.log("err",err)
    })
}
getData(inUrl)
let container = document.querySelector("#results")
let showNews = (data)=>{
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