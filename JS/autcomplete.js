let sugesstion = document.querySelector(".suggestions")


document.getElementById("x").addEventListener("click",()=>{
    valueSearch.value=""
    removeList()
    boxHrIconSearch()
})

const removeList = ()=>{
    if(document.querySelector(".suggestions ul")){
        document.querySelector(".suggestions ul").remove()
    }
}

const listSugesstion = (data)=>{
    let listSugesstion = document.createElement("ul")
    listSugesstion.classList.add("listSuggestion")
    data.forEach( item => {
        let itemSugesstion = document.createElement("div")
        itemSugesstion.classList.add("itemList")
        let imgItem = document.createElement("img")
        imgItem.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-search.svg")
        imgItem.classList.add("img_search")
        let pItem = document.createElement("p")
        pItem.textContent=`${item.name}`
        itemSugesstion.appendChild(imgItem)
        itemSugesstion.appendChild(pItem)
        listSugesstion.appendChild(itemSugesstion)

        pItem.addEventListener("click", ()=>{
            valueSearch.value = `${item.name}`
        })

        setTimeout(() => {
            imgItem.addEventListener("click",(e)=>{
                valueSearch.value = `${item.name}`
                getSearch(e)
                removeList()
                document.querySelector(".search_bar_boxHr").style.display="none"
                document.getElementById("search_lupa").classList.remove("leftLupa")
                document.getElementById("x").style.display="none"
            })
        }, 0); 
    });
    sugesstion.appendChild(listSugesstion)
}


const boxHrIconSearch = ()=>{
    if(valueSearch.value != "" ){
        document.querySelector(".search_bar_boxHr").style.display="flex"
        document.getElementById("search_lupa").classList.add("leftLupa")
        document.getElementById("x").style.display="block"
    }else{
        document.querySelector(".search_bar_boxHr").style.display="none"
        document.getElementById("search_lupa").classList.remove("leftLupa")
        document.getElementById("x").style.display="none"
    }
}

valueSearch.onkeyup = async (e)=>{
    let valueInput = e.target.value;
    
    const url=`https://api.giphy.com/v1/gifs/search/tags?api_key=${conf_k_on}&q=${valueInput}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    const gifData = responseJSON.data

    removeList()
    boxHrIconSearch()
    listSugesstion(gifData)
}