const inputSearch = document.querySelector(".search input");
const ul = document.querySelector(".suggestions ul");
const suggestions = document.querySelector(".suggestions")

iconRight.addEventListener("click",(event)=>{
    inputFunctionalities(event.target.id)
})

function inputFunctionalities(type){
    switch(type){
        case "xmark":
            emptyInputSearch()
            break
        case "glass":
            console.log("Esto es busqueda")
    }
}

function emptyInputSearch(){
    inputSearch.value=""
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

function searchFetchValue(value){
    inputSearch.value=`${value}`
    onkeyChangeIcon("")
    deleteList()
    toggleSearch(0)
}

function eventTarget(e){
    const element = e.target;
    let item;
    let value;

    switch(element.tagName){
        case "I":
            const parent = element.parentElement;
            item = parent.children[1];
            value = item.innerHTML
            searchFetchValue(value)
            break
        case "LI":
            item = element.children[1];
            value = item.innerHTML
            searchFetchValue(value)
            break
        case "P":
            value = element.innerHTML
            searchFetchValue(value)
            break
    }

}

function createSuggestionTable(items){
    deleteList()
    const liItem = []
    const data = []
    items.forEach(item => data.push(item.name))

    data.forEach( item => {
        const li = document.createElement("li")
        li.addEventListener("click", (event)=>eventTarget(event))
        li.innerHTML= `
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>${item}</p>
        `
        liItem.push(li)
    })

    ul.append(...liItem)
}

function toggleSearch(items){
    if(items != 0){
        inputSearch.classList.add("table")
        suggestions.classList.add("block")
    }else{
        inputSearch.classList.remove("table")
        suggestions.classList.remove("block")
    }
} 

/* inputSearch.onkeyup = async (e)=>{
    const valueTarget = e.target.value;
    onkeyChangeIcon(valueTarget);

    const fetch = await fetchApi(linkSearch,key,boundSearch,valueTarget)
    const fetchLenght = Object.keys(fetch).length
    createSuggestionTable(fetch)
    toggleSearch(fetchLenght)

}  */