//Variables
let favoriteTemplateGif = document.getElementById("favoritosSectionGif")

document.addEventListener("DOMContentLoaded",()=>{leerLSGifLoad()})
document.addEventListener("DOMContentLoaded",()=>{nullGif()})
//Funciones
const getGifFavorites = (imgGifUrl,userGif,nameGif,idGif)=>{

    let infoGif = {
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

const insertFavoriteSection = (infoGif)=>{
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
    imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-active.svg")
    divHeart.setAttribute("data-id",`${infoGif.idGif}`)
    btnHeart.appendChild(imgBtnHeart)
    divHeart.appendChild(btnHeart)
    divBtn.appendChild(divHeart)
       
    //Event Handler Modal
    divHeart.addEventListener("click", (e)=>{
        e.preventDefault()
        let item = e.target
        let deleteBoxGif = item.parentElement.parentElement.parentElement.parentElement
                
        let btnStyles = ()=>{
                imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
        }
        btnStyles()
    
        setTimeout(()=>{
            deleteBoxGif.remove()
        },0)

        removeItem(infoGif.idGif)
        nullGif()
           
    })   
       
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
        let imgGifUrl = infoGif.imgGifUrl 
        let userGif = infoGif.userGif
        let nameGif = infoGif.nameGif
        let idGif = infoGif.idGif
       
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

const guardarGifLS = (infoGif)=>{
    let favoritos;
    //Toma valor de un arreglo con datos del LS
    favoritos = obtenerGifsFavoritosLocalStorage()
    //Agregar el producto al carrito
    favoritos.push(infoGif)
    //Agregamos al LS
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}
const obtenerGifsFavoritosLocalStorage = ()=>{
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

const leerLSGifLoad = ()=>{
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
    let btnHeart = document.createElement("button")
    let imgBtnHeart= document.createElement("img")
    imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-active.svg")
    divHeart.setAttribute("data-id",`${GifFavorito.idGif}`)
    btnHeart.appendChild(imgBtnHeart)
    divHeart.appendChild(btnHeart)
    divBtn.appendChild(divHeart)
       
    //Event Handler Modal
    divHeart.addEventListener("click", (e)=>{
        e.preventDefault()
        let item = e.target
        let deleteBoxGif = item.parentElement.parentElement.parentElement.parentElement
                
        let btnStyles = ()=>{
                imgBtnHeart.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
        }
        btnStyles()
    
        setTimeout(()=>{
            deleteBoxGif.remove()
        },1000)
        removeItem(GifFavorito.idGif)
        nullGif()
}) 
       
    let divDown= document.createElement("div")
    divDown.classList.add("box_li_btn_down")
    let btnDown = document.createElement("button")
    let imgBtnDown = document.createElement("img")
    imgBtnDown.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
    divDown.setAttribute("data-id",`${GifFavorito.idGif}`)
    btnDown.appendChild(imgBtnDown)
    divDown.appendChild(btnDown)
    divBtn.appendChild(divDown)
       
       
       
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
        imgGifUrl = GifFavorito.imgGifUrl 
        userGif =  GifFavorito.userGif
        nameGif =  GifFavorito.nameGif
        idGif =  GifFavorito.idGif
       
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

const removeItem = (item)=>{
    let favoritos;
    //Toma valor de un arreglo con datos del LS
    favoritos = obtenerGifsFavoritosLocalStorage();
  
    favoritosIndexDelete = favoritos.findIndex(function(ed){ return ed.idGif === item})

    
    favoritos.splice(favoritosIndexDelete,1)

    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

const nullGif = ()=>{
    let verifyGif = obtenerGifsFavoritosLocalStorage()
    let articleFav= document.getElementById("articleFavorite")
    if(Object.keys(verifyGif).length === 0){
        let divBox = document.createElement("div")
        divBox.classList.add("nofFoundImg")
        divBox.setAttribute("id","notFoundImgId")
        let imgBox = document.createElement("img")
        imgBox.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-sin-contenido.svg")
        divBox.appendChild(imgBox)
        let wordBox = document.createElement("div")
        wordBox.classList.add("wordsFavorites")
        let textBox1 = document.createElement("p")
        textBox1.textContent = `¡Guarda tu primer GIFO en Favoritos`
        let textBox2 = document.createElement("p")
        textBox2.textContent = `para que se muestre aquí!`
        wordBox.appendChild(textBox1)
        wordBox.appendChild(textBox2)
        divBox.appendChild(wordBox)
        articleFav.appendChild(divBox)
    }else{
        let divToDelete = document.getElementById("notFoundImgId")
        if(divToDelete){
            divToDelete.remove()
        }else{
            return 
        } 
    }
}
