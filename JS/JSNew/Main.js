const title = document.querySelector(".title")
const img = document.querySelector("main div img")
const iconRight = document.getElementById("right")
const iconLeft = document.getElementById("left")
const trendingRef = document.querySelector(".dataTrending ul")

const linkTrending = "https://api.giphy.com/v1/trending/searches?api_key="
const key="wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"
/* const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM" */

document.addEventListener('DOMContentLoaded',()=>{
    categoryTrending(); 
    loadingFirstElements();
    loadingIcon();
})

function loadingFirstElements(){
    img.src="GIFOS-UI-Desktop+Mobile 6/assets/ilustra_header.svg"
    title.innerHTML=`
        <p>Inspírate, busca, guarda, y crea </p>
        <p>los mejores <a> GIFOS </a> </p>
    `
}

function loadingIcon(){
    iconRight.innerHTML=`
        <i class="fa-solid fa-magnifying-glass"></i>
    `
    iconLeft.innerHTML=`
        <i class="fa-solid fa-xmark"></i>
    `
    iconLeft.style.display="none"
}

function changeIconPlace(){
    iconRight.innerHTML=`
        <i class="fa-solid fa-xmark"></i>
    `
    iconLeft.innerHTML=`
        <i class="fa-solid fa-magnifying-glass"></i>
    `
    iconLeft.style.display="block" 
}

const categoryTrending = async ()=>{
    const fetch = await fetchApi(linkTrending,key)
    const items = []

    try {
        fetch.forEach( item =>{
            const li = document.createElement("li")
            li.textContent=`${item.toUpperCase()}`
            items.push(li) 
        }) 
    } catch (error) {
        console.error(error)
    }

    trendingRef.append(...items)

}
