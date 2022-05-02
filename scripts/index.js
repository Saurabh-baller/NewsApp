// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

import sidebar from "../components/Sidebar.js";

let up = document.getElementById("navbar").innerHTML = navbar();

let url = `https://masai-mock-api.herokuapp.com/news?q=${search_input}`;

// console.log(url);

async function apicall(url){

    let res = await fetch(url);

    let data = await res.json();

    // console.log(data)



}
let search = document.getElementById("search_input")

search.addEventListener("keypress",getinput);

function getinput(e){
    // console.log("son")

    let input = document.getElementById("search_input").value;

    // console.log(e.key)
    if(e.key=="Enter"){
        localStorage.setItem("news",input);
        window.location.href="search.html";
        console.log(input)
    }
};

let id = document.getElementById("")
async function mon (){
    try{
    let gpi = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;

    let les = await fetch(gpi);

    let jes = await les.json();
    console.log(jes)

    xyz(jes);
    }catch(err){

        console.log(err);

    }
}
//  mon();

function xyz(jes){
    let kes = document.getElementById("results")
    

    jes.forEach ((ele) => {

        let div1 = document.createElement("div");

       let div2 = document.createElement("div")


        let div=document.createElement("div");

        let h3 = document.createElement("h3")

      h3.innerText = ele.title;

      let img = document.createElement("img");

      img.src = ele.url;

      let h5= document.createElement("h5");

      h5.innerText = ele.description

      div1.append(img)

      div2.append(h3,h5);

      div.append(div1,div2)

      kes.append(div);
    });



}

let w = document.getElementById("sidebar").innerHTML=sidebar();








