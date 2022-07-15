const title = document.querySelector(".title")
const img = document.querySelector("main div img")
const trendingRef = document.querySelector(".dataTrending")

document.addEventListener('DOMContentLoaded',()=>{
    /* categoryTrending(trendingRef);   */
    loadingFirstElements();
    loadingIcon();
    deleteLocalStorage(nodes.main.key) 
})

function loadingFirstElements(){
    img.src="GIFOS-UI-Desktop+Mobile 6/assets/ilustra_header.svg"
    title.innerHTML=`
        <p>Inspírate, busca, guarda, y crea </p>
        <p>los mejores <a> GIFOS </a> </p>
    `
}

function loadingIcon(value){
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

const categoryTrending = async (nodo)=>{

    const CategoryTrendingDataFetch = new FetchData({
        link:linkTrending
    })

    const fetch  = await CategoryTrendingDataFetch.fetchApi()
    const items = []

    try {
        fetch.forEach( item =>{
            const li = document.createElement("p")
            li.textContent=`${item.toUpperCase()}`
            items.push(li) 
        }) 
    } catch (error) {
        console.error(error)
    }


    nodo.append(...items)

}

function deleteLocalStorage(key){
    localStorage.removeItem(key)
}

function getLocalStorage(key){
    const items = JSON.parse(localStorage.getItem(`${key}`))
    return items;
}