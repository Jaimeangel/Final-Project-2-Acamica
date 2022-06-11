const title = document.querySelector(".title")
const img = document.querySelector("main div img")
const iconRight = document.getElementById("right")
const iconLeft = document.getElementById("left")
const trendingRef = document.querySelector(".dataTrending ul")

document.addEventListener('DOMContentLoaded',()=>{
    /* categoryTrending();  */
    loadingFirstElements();
    loadingIcon();
    /* deleteLocalStorage(nodes.main.key) */
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
        <i id="glass" class="fa-solid fa-magnifying-glass"></i>
    `
    iconLeft.innerHTML=`
        <i class="fa-solid fa-xmark"></i>
    `
    iconLeft.style.display="none"
}

function changeIconPlace(){
    iconRight.innerHTML=`
        <i id="xmark" class="fa-solid fa-xmark"></i>
    `
    iconLeft.innerHTML=`
        <i id="glass" class="fa-solid fa-magnifying-glass"></i>
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
