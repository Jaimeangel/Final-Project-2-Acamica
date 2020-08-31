///Apy Key 
const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"

//Variables
let searchValue = document.querySelector(".search_bar")
let valueSearch = document.querySelector(".search_input")
let ctnGyphy = document.querySelector(".gifBox")


//Eventos
searchValue.addEventListener("click",getSearch)


//Funciones
function getSearch(e){
    e.preventDefault()
    const item = e.target
    if(item.classList[0] === "search_img"){
        let valueBusqueda = valueSearch.value
        getGyphy(valueBusqueda)
    }
}

async function getGyphy(valueBusqueda){
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${conf_k_on}&q=${valueBusqueda}&limit=12`

    const response = await fetch(url)
    const responseJSON = await response.json()

    try{
        let giphyResponse = responseJSON.data

        for(let i=0; i < giphyResponse.length; i++){

            console.log(giphyResponse[i])

            let img = giphyResponse[i].images.original.url
            let id = giphyResponse[i].id
        
            let divCtn = document.createElement("div")
            divCtn.classList.add("box")

            let imgCtn = document.createElement("div")
            imgCtn.classList.add("box_img")

            let imgGyphy = document.createElement("img")
            imgGyphy.src=`${img}`
            
            imgCtn.appendChild(imgGyphy)
              divCtn.appendChild(imgCtn)
                ctnGyphy.appendChild(divCtn)
            
        } 
    }catch{
        console.log("Este Gyphy no se encuentra")
    }
}
