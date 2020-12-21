///Apy Key 
const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"

/* Search Gif Main Page */

//Api varibales
let numberGifInit = 12
let offSetVariable = 0

//Main Ctn Gif
let searchValue = document.querySelector(".search_bar")
let valueSearch = document.querySelector(".search_input")

let btnMoreGif = document.getElementById("moreGifBtn")

let ctnMain = document.querySelector(".gifCtn")
let ctnGyphy = document.querySelector(".gifBox")
let gifBox = document.querySelector("box")

let changeTitle = document.getElementById("title")
let hrElement = document.getElementById("hr")

//Event
searchValue.addEventListener("click",getSearch)
btnMoreGif.addEventListener("click",getMoreGif)

let contador=1
//Value Search Input
function getSearch(e){
    e.preventDefault()
    const item = e.target

    if(item.classList[0] === "search_img"){
        let valueBusqueda = valueSearch.value

        let parentTitle = changeTitle.childNodes[1]
        newTitle = document.createElement("h2")
        newTitle.innerText = `${valueBusqueda}`
        changeTitle.replaceChild(newTitle,parentTitle)

        btnMoreGif.style.display="flex"
        getGyphy(valueBusqueda)

        paginationNumber()
        console.log(contador)
        contador++
    }
}

function getMoreGif(e){
    e.preventDefault()
    const item = e.target
    if(item.classList[0] === "btnGifVermas"){
        let valueBusqueda = valueSearch.value

        offSetVariable = offSetVariable + numberGifInit
        getGyphy(valueBusqueda)
    }
}

//get Gif from APIGiphy [Endpoint search]
async function getGyphy(valueBusqueda){
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${conf_k_on}&q=${valueBusqueda}&limit=${numberGifInit}&offset=${offSetVariable}`

    const response = await fetch(url)
    const responseJSON = await response.json()

    try{
        let giphyResponse = responseJSON.data

        for(let i=0; i < giphyResponse.length; i++){

            /* console.log(giphyResponse[i]) */
    
            let img = giphyResponse[i].images.original.url
            let title = giphyResponse[i].title
            let user = giphyResponse[i].username  
            let id = giphyResponse[i].id
            
            //Creando Contenedor/incluye gif
            let divCtn = document.createElement("div")
            divCtn.style.backgroundImage = `url(${img})`
            divCtn.classList.add("box")

            //Creamos caja de botones
            let divBtn = document.createElement("div")
            divBtn.classList.add("box_li")

            //Botones Individuales

            let divHeart= document.createElement("div")
            divHeart.classList.add("box_li_btn_heart")
            btnHeart = document.createElement("button")
            imgBtnHeart= document.createElement("img")
            imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
            divHeart.setAttribute("data-id",`${id}`)
            btnHeart.appendChild(imgBtnHeart)
            divHeart.appendChild(btnHeart)
            divBtn.appendChild(divHeart)

            //Event Handler Modal
            divHeart.addEventListener("click", ()=>{

                    imgGifUrl = img
                    userGif = user
                    nameGif = title
                    idGif = id
       
                    getGifFavorites(imgGifUrl,userGif,nameGif,idGif)
            }) 

            let divDown= document.createElement("div")
            divDown.classList.add("box_li_btn_down")
            btnDown = document.createElement("button")
            imgBtnDown = document.createElement("img")
            imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
            divDown.setAttribute("data-id",`${id}`)
            btnDown.appendChild(imgBtnDown)
            divDown.appendChild(btnDown)
            divBtn.appendChild(divDown)



            let divMax= document.createElement("div")
            divMax.classList.add("box_li_btn_max")
            btnMax = document.createElement("button")
            imgBtnMax = document.createElement("img")
            imgBtnMax.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-max.svg")
            btnMax.appendChild(imgBtnMax)
            divMax.appendChild(btnMax)
            divBtn.appendChild(divMax)

            
            divCtn.appendChild(divBtn)
            
            //Event Handler Modal
            divMax.addEventListener("click", ()=>{
                imgGifUrl = img
                userGif = user
                nameGif = title
                idGif = id

                buildingModal(imgGifUrl,userGif,nameGif,idGif)
            })  

            let divAutor = document.createElement("div")
            divAutor.classList.add("box_autor")

            divPrfOne = document.createElement("div")
            divPrfOne.classList.add("p_user") 
            divPrfOne.innerText=`${user}`
            divAutor.appendChild(divPrfOne)

            divPrfTwo = document.createElement("div")
            divPrfTwo.classList.add("p_name") 
            divPrfTwo.innerText=`${title}`
            divAutor.appendChild(divPrfTwo)

            divCtn.appendChild(divAutor) 

            ctnGyphy.appendChild(divCtn)


        }
    }catch{
        console.log("Este Gyphy no se encuentra")
    }
    contarGif()
}


/* Carousel Trending Gif*/

//Carousel Content
let rowCarousel = document.querySelector(".carousel")
let ctnCarousel = document.querySelector(".ctn-slide")
//Carousel Arrow
let leftarrow = document.getElementById("left-arrow")
let rightarrow = document.getElementById("right-arrow")

//function for get Gif from APYGiphy [Endpoint trending]
async function getTrending(){
    let url= `https://api.giphy.com/v1/gifs/trending?api_key=${conf_k_on}`

    const response = await fetch(url)
    const responseJSON = await response.json()

    try{
        let giphyResponse = responseJSON.data
        for(let i=0; i < giphyResponse.length; i++){
            
            let img = giphyResponse[i].images.original.url
            let title = giphyResponse[i].title
            let user = giphyResponse[i].username
            let id = giphyResponse[i].id  
            
            let ctnSlide = document.createElement("div")
            ctnSlide.style.backgroundImage = `url(${img})`
            ctnSlide.classList.add("box")

            //Creamos caja de botones
            let divBtn = document.createElement("div")
            divBtn.classList.add("box_li")
            
            //Botones Individuales
            
            let divHeart= document.createElement("div")
            divHeart.classList.add("box_li_btn")
            divHeart.setAttribute("data-id",`${id}`)
            btnHeart = document.createElement("button")
            imgBtnHeart= document.createElement("img")
            imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
            divHeart.appendChild(btnHeart)
            btnHeart.appendChild(imgBtnHeart)
            divBtn.appendChild(divHeart)
            
            let divDown= document.createElement("div")
            divDown.classList.add("box_li_btn")
            divDown.setAttribute("data-id",`${id}`)
            btnDown = document.createElement("button")
            imgBtnDown = document.createElement("img")
            imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
            btnDown.appendChild(imgBtnDown)
            divDown.appendChild(btnDown)
            divBtn.appendChild(divDown)
            
            let divMax= document.createElement("div")
            divMax.classList.add("box_li_btn")
            let btnMax = document.createElement("button")
            let imgBtnMax = document.createElement("img")
            imgBtnMax.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-max.svg")
            btnMax.appendChild(imgBtnMax)
            divMax.appendChild(btnMax)
            divBtn.appendChild(divMax)
            
            ctnSlide.appendChild(divBtn)

            //Event listener obtener modal
            divMax.addEventListener("click", ()=>{
                imgGifUrl = img
                userGif = user
                nameGif = title
                idGif = id

                buildingModal(imgGifUrl,userGif,nameGif,idGif)
            }) 
                        
            let divAutor = document.createElement("div")
            divAutor.classList.add("box_autor")
            
            let divPrfOne = document.createElement("div")
            divPrfOne.classList.add("p") 
            divPrfOne.innerText=`${user}`
            divAutor.appendChild(divPrfOne)
            
            let divPrfTwo = document.createElement("div")
            divPrfTwo.classList.add("p") 
            divPrfTwo.innerText=`${title}`
            divAutor.appendChild(divPrfTwo)
            
            ctnSlide.appendChild(divAutor) 
            

            ctnCarousel.appendChild(ctnSlide)
        }
    }catch{
        console.log("Este Gyphy no se encuentra")
    } 
} 

getTrending()

function paginationNumber(){
    console.log("Funcion contador andando")
	if(contador){
			let btn = document.createElement("div")
			let btnNumber = document.createElement("button")
			btnNumber.textContent=`${contador}`
			btn.appendChild(btnNumber)

            let insertNumberPagination = paginationInsert.insertBefore(btn,next)

            console.log("haciendo numeracion")
	}else{
        console.log("no ahora no se puede")
    }
}
