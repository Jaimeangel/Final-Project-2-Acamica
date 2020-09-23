///Apy Key 
const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"

//Variables
let searchValue = document.querySelector(".search_bar")
let valueSearch = document.querySelector(".search_input")
let ctnGyphy = document.querySelector(".gifBox")
let ctnMain = document.querySelector(".gifCtn")
let changeTitle = document.getElementById("title")
let hrElement = document.getElementById("hr")
let gifBox = document.querySelector("box")
//Carousel Variables
let rowCarousel = document.querySelector(".carousel")
let ctnCarousel = document.querySelector(".ctn-slide")
let leftarrow = document.getElementById("left-arrow")
let rightarrow = document.getElementById("right-arrow")
let darkModeEvent = document.getElementById("darkMode")
let btnDark = document.getElementById("darkMode")

//Eventos
searchValue.addEventListener("click",getSearch)
rightarrow.addEventListener ('click', () => {
    rowCarousel.scrollLeft += rowCarousel.offsetWidth;
  });
  
leftarrow.addEventListener ('click', () => {
    rowCarousel.scrollLeft -= rowCarousel.offsetWidth;
    
  });
btnDark.addEventListener("click",darkStyles)


//Funciones
function getSearch(e){
    e.preventDefault()
    const item = e.target

    if(item.classList[0] === "search_img"){
        let valueBusqueda = valueSearch.value

        let parentTitle = changeTitle.childNodes[1]
        newTitle = document.createElement("h2")
        newTitle.innerText = `${valueBusqueda}`
        changeTitle.replaceChild(newTitle,parentTitle)

        getGyphy(valueBusqueda)
    }
}

async function getGyphy(valueBusqueda){
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${conf_k_on}&q=${valueBusqueda}&limit=4`

    const response = await fetch(url)
    const responseJSON = await response.json()

    try{
        let giphyResponse = responseJSON.data

        for(let i=0; i < giphyResponse.length; i++){

            /* console.log(giphyResponse[i]) */
    
            let img = giphyResponse[i].images.original.url
            let title = giphyResponse[i].title
            let user = giphyResponse[i].username  
           /*  let id = giphyResponse[i].id  */
            
            //Creando Contenedor/incluye gif
            let divCtn = document.createElement("div")
            divCtn.style.backgroundImage = `url(${img})`
            divCtn.classList.add("box")

            //Creamos caja de botones
            divBtn = document.createElement("div")
            divBtn.classList.add("box_li")

            //Botones Individuales

            let divHeart= document.createElement("div")
            divHeart.classList.add("box_li_btn")
            btnHeart = document.createElement("button")
            imgBtnHeart= document.createElement("img")
            imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
            btnHeart.appendChild(imgBtnHeart)
            divHeart.appendChild(btnHeart)
            divBtn.appendChild(divHeart)

            let divDown= document.createElement("div")
            divDown.classList.add("box_li_btn")
            btnDown = document.createElement("button")
            imgBtnDown = document.createElement("img")
            imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
            btnDown.appendChild(imgBtnDown)
            divDown.appendChild(btnDown)
            divBtn.appendChild(divDown)



            let divMax= document.createElement("div")
            divMax.classList.add("box_li_btn")
            btnMax = document.createElement("button")
            imgBtnMax = document.createElement("img")
            imgBtnMax.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-max.svg")
            btnMax.appendChild(imgBtnMax)
            divMax.appendChild(btnMax)
            divBtn.appendChild(divMax)

            
            divCtn.appendChild(divBtn)
            
            //Event listener obtener modal
            divMax.addEventListener("click", getModalGif) 

            divAutor = document.createElement("div")
            divAutor.classList.add("box_autor")

            divPrfOne = document.createElement("div")
            divPrfOne.classList.add("p") 
            divPrfOne.innerText=`${user}`
            divAutor.appendChild(divPrfOne)

            divPrfTwo = document.createElement("div")
            divPrfTwo.classList.add("p") 
            divPrfTwo.innerText=`${title}`
            divAutor.appendChild(divPrfTwo)

            divCtn.appendChild(divAutor) 

            ctnGyphy.appendChild(divCtn)


        }
    }catch{
        console.log("Este Gyphy no se encuentra")
    }
}


async  function getTrending(){
    let url= `https://api.giphy.com/v1/gifs/trending?api_key=${conf_k_on}`

    const response = await fetch(url)
    const responseJSON = await response.json()

    try{
        let giphyResponse = responseJSON.data
        for(let i=0; i < giphyResponse.length; i++){
            
            let img = giphyResponse[i].images.original.url
            let title = giphyResponse[i].title
            let user = giphyResponse[i].username  
            
            let ctnSlide = document.createElement("div")
            ctnSlide.style.backgroundImage = `url(${img})`
            ctnSlide.classList.add("box")

                        //Creamos caja de botones
                        divBtn = document.createElement("div")
                        divBtn.classList.add("box_li")
            
                        //Botones Individuales
            
                        let divHeart= document.createElement("div")
                        divHeart.classList.add("box_li_btn")
                        btnHeart = document.createElement("button")
                        imgBtnHeart= document.createElement("img")
                        imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
                        btnHeart.appendChild(imgBtnHeart)
                        divHeart.appendChild(btnHeart)
                        divBtn.appendChild(divHeart)
            
                        let divDown= document.createElement("div")
                        divDown.classList.add("box_li_btn")
                        btnDown = document.createElement("button")
                        imgBtnDown = document.createElement("img")
                        imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
                        btnDown.appendChild(imgBtnDown)
                        divDown.appendChild(btnDown)
                        divBtn.appendChild(divDown)
            
            
            
                        let divMax= document.createElement("div")
                        divMax.classList.add("box_li_btn")
                        btnMax = document.createElement("button")
                        imgBtnMax = document.createElement("img")
                        imgBtnMax.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-max.svg")
                        btnMax.appendChild(imgBtnMax)
                        divMax.appendChild(btnMax)
                        divBtn.appendChild(divMax)
            
                        ctnSlide.appendChild(divBtn)
                        //Evento modal
                        divMax.addEventListener("click",getModalGif)
                        
                        divAutor = document.createElement("div")
                        divAutor.classList.add("box_autor")
            
                        divPrfOne = document.createElement("div")
                        divPrfOne.classList.add("p") 
                        divPrfOne.innerText=`${user}`
                        divAutor.appendChild(divPrfOne)
            
                        divPrfTwo = document.createElement("div")
                        divPrfTwo.classList.add("p") 
                        divPrfTwo.innerText=`${title}`
                        divAutor.appendChild(divPrfTwo)
            
                        ctnSlide.appendChild(divAutor) 
            

                        ctnCarousel.appendChild(ctnSlide)
        }
    }catch{

    } 
} 
getTrending() 

function darkStyles(){
    if(darkModeEvent.checked){
        document.body.classList.add("dark-mode")
    }else{
        document.body.classList.remove("dark-mode")
    }
}

function getModalGif(e){
    //Variables
    let catchGifCtn = e.currentTarget.parentNode.parentNode

    let imgUrl = catchGifCtn.style.backgroundImage
    let autorRefMax = catchGifCtn.childNodes[1]
    let btnHeartRefMax = catchGifCtn.childNodes[0].childNodes[0]
    let btnDownRefMax =  catchGifCtn.childNodes[0].childNodes[1]

    console.log(imgUrl)
    console.log(autorRefMax)
    console.log(btnHeartRefMax)
    console.log(btnDownRefMax)
   
/*     

    //Creando modal 

    //Parent Content
    let ctnModal = document.createElement("div")
    ctnModal.classList.add("ctnModal")
    ctnModal.style.display="block"

    //Child Conten
    let contentModal = document.createElement("div")
    contentModal.classList.add("contentModal")
    ctnModal.appendChild(contentModal)

    //Btn close modal
    let spanElement = document.createElement("span")
    spanElement.setAttribute("id","btnClose")
    let btnSpan = document.createElement("button")
    spanElement.appendChild(btnSpan)
    let iconX = document.createElement("i")
    iconX.setAttribute("class","fas fa-times")
    btnSpan.appendChild(iconX)
    spanElement.appendChild(btnSpan)
    contentModal.appendChild(spanElement)
    //Evento close
    spanElement.addEventListener("click",() =>{
        ctnModal.style.display="none"
    })

    //Img Gif
    let ctnGifMax = document.createElement("div")
    ctnGifMax.classList.add("imgGif")
    ctnGifMax.style.backgroundImage = `${imgUrl}`
    contentModal.appendChild(ctnGifMax)

    //Reference autor/buttons

    //Content autor/buttons
    let refAutorBtn = document.createElement("div")
    refAutorBtn.classList.add("refAutorBtn")
    contentModal.appendChild(refAutorBtn)

    //autor
    let autorCtnMax = document.createElement("div")
    autorCtnMax.classList.add("autor")
    autorCtnMax.appendChild(autorRefMax)
    refAutorBtn.appendChild(autorCtnMax)

    //Buttons Content
    let btnCtnMax = document.createElement("div")
    btnCtnMax.classList.add("btn")
    refAutorBtn.appendChild(btnCtnMax)

    //Heart Button
    let btnHeartBotone = document.createElement("button")
    btnHeartBotone.appendChild(btnHeartRefMax)
    btnCtnMax.appendChild(btnHeartBotone)

    //Down Button
    let btnDownBotone = document.createElement("button")
    btnDownBotone.appendChild(btnDownRefMax)
    btnCtnMax.appendChild(btnDownBotone)

    //Agregando modal content gif
    ctnGyphy.appendChild(ctnModal) 


     */
}   