const inputSearch = document.querySelector(".search input");
const ul = document.querySelector(".suggestions ul");
const suggestions = document.querySelector(".suggestions")

const linkSearch ="https://api.giphy.com/v1/gifs/search/tags?api_key="
const boundSearch = "&q="

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

function createSuggestionTable(items){
    deleteList()
    const liItem = []
    const data = []
    items.forEach(item => data.push(item.name))

    data.forEach( item => {
        const li = document.createElement("li")
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

inputSearch.onkeyup = async (e)=>{
    const valueTarget = e.target.value;
    onkeyChangeIcon(valueTarget);

    const fetch = await fetchApi(linkSearch,key,boundSearch,valueTarget)
    const fetchLenght = Object.keys(fetch).length
    createSuggestionTable(fetch)
    toggleSearch(fetchLenght)

} 