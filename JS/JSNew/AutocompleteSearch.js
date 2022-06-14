const inputSearch = document.querySelector(".search input");
const ul = document.querySelector(".suggestions ul");
const suggestions = document.querySelector(".suggestions")
const titleGiphy = document.querySelector(".fetchGiphy h2")


ul.addEventListener("click", (event)=>eventTarget(event))
btnMoreGIF.addEventListener("click",(event)=>eventTarget(event))

iconRight.addEventListener("click",(event)=>{
    const id = event.target.id
    inputFunctionalities(id)
})

iconLeft.addEventListener("click",(event)=>{
    const id = event.target.id
    inputFunctionalities(id)
})

/* De Aqui viene la busqueda desde el boton de lupa cuando no hay barra de suggestion */
function inputFunctionalities(type){
    switch(type){
        case "xmark":
            emptyInputSearch()
            break;
        case "glass":
            const value = inputSearch.value;
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            emptyInputSearch(value)
            break;
    }
}
/* repetida */
function emptyInputSearch(value=""){
    inputSearch.value=`${value}`
    onkeyChangeIcon("")
    deleteList()
    toggleSearch(0)
}

function onkeyChangeIcon(trigger){
    if(!trigger){
        loadingIcon()
    }else{
        changeIconPlace()
    }
}

function deleteList(){
    ul.innerHTML=""
}
/* repetida */
function searchFetchValue(value){
    inputSearch.value=`${value}`
    onkeyChangeIcon("")
    deleteList()
    toggleSearch(0)
}

function counter(value){
    let count = nodes.offSet + value
    nodes.offSet= count
    return nodes.offSet;
}

/* De Aqui vienen las busquedas desde la seccion de sugerencias */
function eventTarget(e){
    let offCounter;
    const element = e.target;
    let item;
    let value;

    switch(element.tagName){
        case "I":
            const parent = element.parentElement;
            item = parent.children[1];
            value = item.innerHTML
            searchFetchValue(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            break
        case "LI":
            item = element.children[1];
            value = item.innerHTML
            searchFetchValue(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            break
        case "P":
            value = element.innerHTML
            searchFetchValue(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            break
        case "BUTTON":
            offCounter = counter(12)
            value = inputSearch.value;
            searchFetchValue(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,offCounter)
            break
    }

}

function createSuggestionTable(array,nodo){
    deleteList()
    const liItem = []
    const data = []
    array.forEach(item => data.push(item.name))
    data.forEach( item => {
        const li = document.createElement("li")
        li.innerHTML= `
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>${item}</p>
        `
        liItem.push(li)
    })

    nodo.append(...liItem)
}

function toggleSearch(longitud){
    if(longitud != 0){
        inputSearch.classList.add("table")
        suggestions.classList.add("block")
    }else{
        inputSearch.classList.remove("table")
        suggestions.classList.remove("block")
    }
} 

inputSearch.onkeyup = async (e)=>{
    const valueTarget = e.target.value;
    onkeyChangeIcon(valueTarget);

    const fetch = await fetchApi(linkSearch,key,boundSearch,valueTarget)
    const fetchLenght = Object.keys(fetch).length
    createSuggestionTable(fetch,ul)
    toggleSearch(fetchLenght)
}  