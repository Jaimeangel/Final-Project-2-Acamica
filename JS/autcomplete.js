let sugesstion = document.querySelector(".suggestions")


document.getElementById("x").addEventListener("click",()=>{
    valueSearch.value=""
    removeList()
    boxHrIconSearch()
})

//Esta funcion quita los item traidos cada vez que teclee en search
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
                boxHrIconSearchWithValue()
            })
        }, 0); 
    });
    sugesstion.appendChild(listSugesstion)
}


//Esta funcion oculta y presenta hr de input
//tambien cambia de posicion lupa de busqueda 
//aparece X
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

const boxHrIconSearchWithValue = ()=>{
    //Oculta barra search, cambia posicion lupa y esconde x.
    //Se usa para el caso en que la barra de busqueda no es vacia y no se puede usar  boxHrIconSearch()
    document.querySelector(".search_bar_boxHr").style.display="none"
    document.getElementById("search_lupa").classList.remove("leftLupa")
    document.getElementById("x").style.display="none"
}

//Esta funcion hace que cada vez que teclee en el input entonces
//Se genere el bloque de codigo
valueSearch.onkeyup = async (e)=>{
    let valueInput = e.target.value;
    
    const url=`https://api.giphy.com/v1/gifs/search/tags?api_key=${conf_k_on}&q=${valueInput}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    const gifData = responseJSON.data

    removeList() //Esta funcion quita los item traidos cada vez que teclee en search
    boxHrIconSearch()// presentacionde hr, cambiar lupa, x
    listSugesstion(gifData) // Trae las sugerencias cada vez que se teclea
}