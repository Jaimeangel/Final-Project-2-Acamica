    window.onload = function cargando(){
        let myGifTemplateGif = document.getElementById("myGifSectionGifNew")
        
        function getGifUploadAPI(){
        
            let getIdLS
            getIdLS = getIdGifLS()
            getIdLS.forEach(async function(GifUpload){
            
                let url=`https://api.giphy.com/v1/gifs/${GifUpload}?api_key=${conf_k_on}`
            
                const response = await fetch(url)
                const responseJSON = await response.json()
                const giphyResponse = responseJSON.data
                console.log(giphyResponse)
            
                let infoGif = {
                    imgGifUrl :giphyResponse.images.original.url,
                    nameGif :giphyResponse.title,
                    userGif :giphyResponse.username,  
                    idGif :giphyResponse.id
                }
        
                //Verificar duplicado GIF
                let GifsUploadLS;
                GifsUploadLS = obtenerGifsUploadLocalStorage()
                GifsUploadLS.forEach(function(GifUpload){
                    if(GifUpload.idGif === infoGif.idGif){
                        GifsUploadLS = GifUpload.idGif
                    }
                })
                if(GifsUploadLS === infoGif.idGif){
                    console.log("El gif ya esta en favoritos")
                }else{
                    insertGifUpload(infoGif)
                }  
                console.log(infoGif)
            })
        }
        getGifUploadAPI()
        
        function insertGifUpload(infoGif){
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
                
         
             guardarGifUploadLS(infoGif)
             myGifTemplateGif.appendChild(divCtn)
        }
        
        function guardarGifUploadLS(infoGif){
            let uploadGif;
            //Toma valor de un arreglo con datos del LS
            uploadGif = obtenerGifsUploadLocalStorage()
            //Agregar el producto al carrito
            uploadGif.push(infoGif)
            //Agregamos al LS
            localStorage.setItem('uploadGif', JSON.stringify(uploadGif))
        }
        function obtenerGifsUploadLocalStorage(){
            let GifUpload;
            //Comprobar si hay algo en LS
            if(localStorage.getItem('uploadGif') === null){
                GifUpload = [];
            }
            else {
                GifUpload = JSON.parse(localStorage.getItem('uploadGif'));
            }
            return GifUpload;
        } 
        function leerLSGifUploadLoad(){
            let GifsUpload;
            GifsUpload = obtenerGifsUploadLocalStorage();
            GifsUpload.forEach(function (GifUpload){
                //Creando Contenedor/incluye gif
            let divCtn = document.createElement("div")
            divCtn.style.backgroundImage = `url(${GifUpload.imgGifUrl})`
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
            divHeart.setAttribute("data-id",`${GifUpload.idGif}`)
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
            divDown.setAttribute("data-id",`${GifUpload.idGif}`)
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
            divPrfOne.innerText=`${GifUpload.userGif}`
            divAutor.appendChild(divPrfOne)
               
            divPrfTwo = document.createElement("div")
            divPrfTwo.classList.add("p_name") 
            divPrfTwo.innerText=`${GifUpload.nameGif}`
            divAutor.appendChild(divPrfTwo)
               
            divCtn.appendChild(divAutor) 
            
            console.log(divCtn)
        
            myGifTemplateGif.appendChild(divCtn)
            });
        }
        leerLSGifUploadLoad() 
        function getIdGifLS(){
            let GifUploadId;
            //Comprobar si hay algo en LS
            if(localStorage.getItem('uploadGifId') === null){
                GifUploadId = [];
            }
            else {
                GifUploadId = JSON.parse(localStorage.getItem('uploadGifId'));
            }
            return GifUploadId;
        }
    }

