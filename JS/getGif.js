//Variables
let favoriteTemplateGif = document.getElementById("favoritosSectionGif")

document.addEventListener("DOMContentLoaded",leerLSGifLoad)

//Funciones
function getGifFavorites(imgGifUrl,userGif,nameGif,idGif){

    const infoGif = {
        imgGifUrl : imgGifUrl,
        userGif : userGif,
        nameGif : nameGif,
        idGif : idGif
    }

    //Verificar duplicado GIF
    let GifsFavoritoLS;
    GifsFavoritoLS = obtenerGifsFavoritosLocalStorage()
    GifsFavoritoLS.forEach(function(GifFavorito){
        if(GifFavorito.idGif === infoGif.idGif){
            GifsFavoritoLS = GifFavorito.idGif
        }
    })
    if(GifsFavoritoLS === infoGif.idGif){
        console.log("El gif ya esta en favoritos")
    }
    else{
        insertFavoriteSection(infoGif)
    }  
}

function insertFavoriteSection(infoGif){
    //Creando Contenedor/incluye gif
    let divCtn = document.createElement("div")
    divCtn.style.backgroundImage = `url(${infoGif.imgGifUrl})`
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
    divHeart.setAttribute("data-id",`${infoGif.idGif}`)
    btnHeart.appendChild(imgBtnHeart)
    divHeart.appendChild(btnHeart)
    divBtn.appendChild(divHeart)
       
                   //Event Handler Modal
    /*                divHeart.addEventListener("click", ()=>{
                           imgGifUrl = img
                           userGif = user
                           nameGif = title
                           idGif = id
       
                       getGifFavorites(imgGifUrl,userGif,nameGif,idGif)
                   })  */ 
       
    let divDown= document.createElement("div")
    divDown.classList.add("box_li_btn_down")
    btnDown = document.createElement("button")
    imgBtnDown = document.createElement("img")
    imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
    divDown.setAttribute("data-id",`${infoGif.idGif}`)
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
        imgGifUrl = infoGif.imgGifUrl 
        userGif = infoGif.userGif
        nameGif = infoGif.nameGif
        idGif = infoGif.idGif
       
        buildingModal(imgGifUrl,userGif,nameGif,idGif)
    })
       
    let divAutor = document.createElement("div")
    divAutor.classList.add("box_autor")
       
    divPrfOne = document.createElement("div")
    divPrfOne.classList.add("p_user") 
    divPrfOne.innerText=`${infoGif.userGif}`
    divAutor.appendChild(divPrfOne)
       
    divPrfTwo = document.createElement("div")
    divPrfTwo.classList.add("p_name") 
    divPrfTwo.innerText=`${infoGif.nameGif}`
    divAutor.appendChild(divPrfTwo)
       
    divCtn.appendChild(divAutor) 
       

    favoriteTemplateGif.appendChild(divCtn)

    guardarGifLS(infoGif)

}

function guardarGifLS(infoGif){
    let favoritos;
    //Toma valor de un arreglo con datos del LS
    favoritos = obtenerGifsFavoritosLocalStorage()
    //Agregar el producto al carrito
    favoritos.push(infoGif)
    //Agregamos al LS
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}
function obtenerGifsFavoritosLocalStorage(){
    let GifFavorito;
    //Comprobar si hay algo en LS
    if(localStorage.getItem('favoritos') === null){
        GifFavorito = [];
    }
    else {
        GifFavorito = JSON.parse(localStorage.getItem('favoritos'));
    }
    return GifFavorito;
}

function leerLSGifLoad(){
    let GifsFavoritoLS;
   /*  console.log(GifsFavoritoLS) */
    GifsFavoritoLS = obtenerGifsFavoritosLocalStorage();
    GifsFavoritoLS.forEach(function (GifFavorito){
        //Creando Contenedor/incluye gif
    let divCtn = document.createElement("div")
    divCtn.style.backgroundImage = `url(${GifFavorito.imgGifUrl})`
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
    divHeart.setAttribute("data-id",`${GifFavorito.idGif}`)
    btnHeart.appendChild(imgBtnHeart)
    divHeart.appendChild(btnHeart)
    divBtn.appendChild(divHeart)
       
                   //Event Handler Modal
    /*                divHeart.addEventListener("click", ()=>{
                           imgGifUrl = img
                           userGif = user
                           nameGif = title
                           idGif = id
       
                       getGifFavorites(imgGifUrl,userGif,nameGif,idGif)
                   })  */ 
       
    let divDown= document.createElement("div")
    divDown.classList.add("box_li_btn_down")
    btnDown = document.createElement("button")
    imgBtnDown = document.createElement("img")
    imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
    divDown.setAttribute("data-id",`${GifFavorito.idGif}`)
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
        imgGifUrl = infoGif.imgGifUrl 
        userGif = infoGif.userGif
        nameGif = infoGif.nameGif
        idGif = infoGif.idGif
       
        buildingModal(imgGifUrl,userGif,nameGif,idGif)
    })
       
    let divAutor = document.createElement("div")
    divAutor.classList.add("box_autor")
       
    divPrfOne = document.createElement("div")
    divPrfOne.classList.add("p_user") 
    divPrfOne.innerText=`${GifFavorito.userGif}`
    divAutor.appendChild(divPrfOne)
       
    divPrfTwo = document.createElement("div")
    divPrfTwo.classList.add("p_name") 
    divPrfTwo.innerText=`${GifFavorito.nameGif}`
    divAutor.appendChild(divPrfTwo)
       
    divCtn.appendChild(divAutor) 
       

    favoriteTemplateGif.appendChild(divCtn)
    });
}