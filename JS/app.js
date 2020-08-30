///Apy Key 
const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"

//Variables
let searchValue = document.querySelector(".search_bar")
let valueSearch = document.querySelector(".search_input")



let example = document.getElementById("boxExample")

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
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${conf_k_on}&q=${valueBusqueda}&limit=1`

    const response = await fetch(url)
    const responseJSON = await response.json()

    try{
        let giphyResponse = responseJSON.data
        for(let i=0; i < giphyResponse.length; i++){

            let img = giphyResponse[i].url 
            let user = giphyResponse[i].user 
            let title = giphyResponse[i].title


            console.log(giphyResponse[i])
        
                      
            let ctnExample = document.createElement("div")
            ctnExample.classList.add("ctn-box")
            let imgCtn = document.createElement("img")
            imgCtn.textContent="src=${img}"
            
            imgCtn.appendChild(ctnExample)
            
            example.appendChild(ctnExample)  
            
        } 
    }catch{
        console.log("Este Gyphy no se encuentra")
    }
}
