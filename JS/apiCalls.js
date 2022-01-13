//Api Key 
const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"


document.addEventListener("DOMContentLoaded",()=>{getTrending()})
document.addEventListener("DOMContentLoaded",()=>{categoryTrending()})

/* Search Gif Main Page */

//Api varibales
let numberGifInit = 12
let offSetVariable = 0

//Main Ctn Gif
let searchValue = document.querySelector(".search_bar")
let valueSearch = document.querySelector(".search_input")

let btnMoreGif = document.getElementById("moreGifBtn")
let btnDiv = document.getElementById("btnDiv")

let ctnMain = document.querySelector(".gifCtn")
let ctnGyphy = document.querySelector(".gifBox")
let ctnGyphyBody = document.body
let gifBox = document.querySelector("box")

let changeTitle = document.getElementById("title")
let hrElement = document.getElementById("hr")

let menuGrip = document.querySelector(".gripMenu")
let menuX = document.querySelector(".xMenu")
let menu = document.querySelector(".navegador")

//Carousel Arrow
let leftarrow = document.getElementById("left-arrow")
let rightarrow = document.getElementById("right-arrow")

let rowCarousel = document.querySelector(".carousel")
let ctnCarousel = document.querySelector(".ctn-slide")

//Eventos Menu Movil
menuGrip.addEventListener("click",()=>{
    menuX.style.display="block"
    menuGrip.style.display="none"
    menu.classList.toggle("none")
})
menuX.addEventListener("click",()=>{
    menuX.style.display="none"
    menuGrip.style.display="block"
    menu.classList.toggle("none")
})

//Arrow Carousel
rightarrow.addEventListener ('click', () => {
    rowCarousel.scrollLeft += rowCarousel.offsetWidth;
  });
  
leftarrow.addEventListener ('click', () => {
    rowCarousel.scrollLeft -= rowCarousel.offsetWidth;
    
  });

//Evento Barra de Busqueda
searchValue.addEventListener("click",(e)=>{
    getSearch(e)
    removeList()
    document.querySelector(".search_bar_boxHr").style.display="none"
})
//Evento Boton "Ver mas" Gif
btnMoreGif.addEventListener("click",(e)=>{getMoreGif(e)})

let contador = 1
const limite = 10

//Funcion barra de busqueda
const getSearch = (e,elemento)=>{
    e.preventDefault()
    const item = e.target
    if(contador <= limite){
        if(item.classList[0] === "search_img"){ 
            let valueBusqueda = valueSearch.value
            //Remplazando titulo de cada busqueda de Gif
            let parentTitle = changeTitle.childNodes[1]
            let newTitle = document.createElement("h2")
            newTitle.innerText = `${valueBusqueda.toUpperCase()}`
            changeTitle.replaceChild(newTitle,parentTitle)

            ////
            document.querySelector(".search_bar_boxHr").style.display="none"
            document.getElementById("search_lupa").classList.remove("leftLupa")
            document.getElementById("x").style.display="none"


            //Function Fetch Api Giphy 
            getGyphy(valueBusqueda)
        }else if(item.classList[0] === "img_search"){
            let valueBusqueda = valueSearch.value
            //Remplazando titulo de cada busqueda de Gif
            let parentTitle = changeTitle.childNodes[1]
            let newTitle = document.createElement("h2")
            newTitle.innerText = `${valueBusqueda.toUpperCase()}`
            changeTitle.replaceChild(newTitle,parentTitle)
            //Function Fetch Api Giphy 
            getGyphy(valueBusqueda)
        }
    }else{
        return
    }
}

//Funcion boton mas Gif
const getMoreGif= (e)=>{
    e.preventDefault()
    const item = e.target
    if(contador <= limite){
        if(item.classList[0] === "btnGifVermas"){
            let valueBusqueda = valueSearch.value
            offSetVariable = offSetVariable + numberGifInit
            getGyphy(valueBusqueda)
        }
    }else{
        return
    }
}

//Funcion busqueda GIF APIGiphy [Endpoint search]
const getGyphy= async (valueBusqueda) => {
    
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${conf_k_on}&q=${valueBusqueda}&limit=${numberGifInit}&offset=${offSetVariable}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    const gifData = responseJSON.data

    try{
        setTimeout(()=>{
            //Compracion si Fetch es diferente de cero
            if(Object.keys(gifData).length){
                //Aqui se crea cada Gif con la informacion obtenida de Gif api
                gifData.forEach( Gif => {
                    
                    /* console.log(giphyResponse[i]) */
            
                    let img = Gif.images.original.url
                    let title = Gif.title
                    let user = Gif.username  
                    let id = Gif.id
                    
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
                    let btnHeart = document.createElement("button")
                    let imgBtnHeart= document.createElement("img")
                    imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
                    divHeart.setAttribute("data-id",`${id}`)
                    btnHeart.appendChild(imgBtnHeart)
                    divHeart.appendChild(btnHeart)
                    divBtn.appendChild(divHeart)
        
                    //Event Handler Modal
                    divHeart.addEventListener("click", ()=>{
        
                        let imgGifUrl = img
                        let userGif = user
                        let nameGif = title
                        let idGif = id
                        
                        
    
                        let favoriteGif = ()=> getGifFavorites(imgGifUrl,userGif,nameGif,idGif)
                        favoriteGif()
                        /* La funcion nullGif() remueve el elemento "no hay gif favoritos"*/
                        let deleteNotFound = ()=> nullGif()
                        deleteNotFound() 
                        let btnStyles = ()=>imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-active.svg")
                        btnStyles()
                    }) 
                
                    let divMax= document.createElement("div")
                    divMax.classList.add("box_li_btn_max")
                    let btnMax = document.createElement("button")
                    let imgBtnMax = document.createElement("img")
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
        
                    let divPrfOne = document.createElement("div")
                    divPrfOne.classList.add("p_user") 
                    divPrfOne.innerText=`${user}`
                    divAutor.appendChild(divPrfOne)
        
                    let divPrfTwo = document.createElement("div")
                    divPrfTwo.classList.add("p_name") 
                    divPrfTwo.innerText=`${title}`
                    divAutor.appendChild(divPrfTwo)
        
                    divCtn.appendChild(divAutor) 
        
                    ctnGyphy.appendChild(divCtn)
        
                });

                const btnStyles =()=>{
                    //se muestra el botn de "Ver mas" para traer mas Gif
                    btnMoreGif.style.display="flex"
                }
                btnStyles()
                //Muesta FrontEnd de paginacion
                paginationNumber()
                //Activa las funciones js de paginacion
                contarGif()
                //Lleva la cuenta en numero(importante para hacer correcta paginacion)
                //Cada vez que se hace una busqueda genera el numero en que se encuentra
                //En la paginacion
                contador++
            }else{
                //Si fetch es cero noo hay gif para mostrar
                notGifFound()
            }
        },0)
    }catch{
        //Si hay erro muestra no hay gif modulo
        notGifFound()
    }
}


/* Carousel Trending Gif*/

//function for get Gif from APYGiphy [Endpoint trending]
const getTrending= async ()=>{
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
            let btnHeart = document.createElement("button")
            let imgBtnHeart= document.createElement("img")
            imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
            divHeart.appendChild(btnHeart)
            btnHeart.appendChild(imgBtnHeart)
            divBtn.appendChild(divHeart)

            divHeart.addEventListener("click", ()=>{
        
                let imgGifUrl = img
                let userGif = user
                let nameGif = title
                let idGif = id
                
                

                let favoriteGif = ()=> getGifFavorites(imgGifUrl,userGif,nameGif,idGif)
                favoriteGif()
                /* La funcion nullGif() remueve el elemento "no hay gif favoritos"*/
                let deleteNotFound = ()=> nullGif()
                deleteNotFound() 
                let btnStyles = ()=>imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-active.svg")
                btnStyles()
            }) 
            
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

const paginationNumber=()=>{
	if(contador <= limite){
            //Creando botones de paginacion segun variable contador 1.2.3.... 
            let btn = document.createElement("div")
            btn.classList.add("btnNumberPagination")
            btn.textContent=`${contador}`
            ctnNumberPagination.appendChild(btn) 
            //Primer pagina con :Hover contador=1
            if(contador === 1){
                btn.classList.add("hoverBtnPagination")
            }
            //Evento cambiar de pagina
            btn.addEventListener("click",(e)=>{
                e.preventDefault()
                const item = e.target
                if(item.classList[0] === "btnNumberPagination"){
                    const valueBtnContador = parseInt(btn.textContent)
                    index = valueBtnContador
                    showItems() //Muestra Gif segun paginacion
                    removeHoverBtn() // Remueve el :hover de los botones
                    hoverBtn(btn)// Agrega el :hover a los botones

                }
            })
	}else{
        return
    }
}

const notGifFound = () => {
    //Ocultamos pagina principal de gif
    btnDiv.style.display="none"
    //Creamos modulo NotFound Gif
    let divBox = document.createElement("div")
    divBox.classList.add("nofFoundImg")
    divBox.setAttribute("id","notFoundImgId")

    let imgBox = document.createElement("img")
    imgBox.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-busqueda-sin-resultado.svg")
    divBox.appendChild(imgBox)

    let wordBox = document.createElement("div")
    wordBox.classList.add("wordsFavorites")
    let textBox1 = document.createElement("p")
    textBox1.textContent = `Intenta con otra búsqueda.`
    wordBox.appendChild(textBox1)
    divBox.appendChild(wordBox)
    //Boton cerrar modulo NotFound Gif
    let btnBox = document.createElement("button")
    btnBox.setAttribute("id","btnNotFound")
    btnBox.textContent="X"
    //Evento cerrar NotFound Gif
    btnBox.addEventListener("click",()=>{
        btnDiv.style.display="inline"
        divBox.remove()
    })

    divBox.appendChild(btnBox)
    //Insertando NotFound en div principal de seccion Main
    ctnMain.appendChild(divBox)
}

const categoryTrending = async ()=>{
    const url=`https://api.giphy.com/v1/trending/searches?api_key=${conf_k_on}`
    const response = await fetch(url)
    const responseJSON = await response.json()
    const gifData = responseJSON.data

    let overflowWord = document.querySelector(".trending_overWords")

    gifData.forEach((element)=>{
        let word = element
        let pOverFlow = document.createElement("p")
        pOverFlow.textContent=`${element.toUpperCase()}`
        overflowWord.appendChild(pOverFlow)

        pOverFlow.addEventListener("click",(e)=>{
            e.preventDefault()
            const search = ()=>{
                let valueBusqueda = word
                //Remplazando titulo de cada busqueda de Gif
                let parentTitle = changeTitle.childNodes[1]
                let newTitle = document.createElement("h2")
                newTitle.innerText = `${valueBusqueda.toUpperCase()}`
                changeTitle.replaceChild(newTitle,parentTitle)
                //Function Fetch Api Giphy 
                getGyphy(valueBusqueda)
            }
            search()
        })
    })



}
