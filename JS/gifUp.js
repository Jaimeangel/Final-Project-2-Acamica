        let myGifTemplateGif = document.getElementById("myGifSectionGifNew")

        document.addEventListener("DOMContentLoaded",()=>{leerLSGifUploadLoad()}) 
        document.addEventListener("DOMContentLoaded",()=>{nullGifOwn()}) 


        const obtenerGifsUploadLocalStorage=()=>{
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

        const leerLSGifUploadLoad=()=>{
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
        
            myGifTemplateGif.appendChild(divCtn)
            });
        }

       const nullGifOwn = ()=>{
            let verifyGif = obtenerGifsUploadLocalStorage()
            let articleMyGif = document.getElementById("articleOwnGif")
            if(Object.keys(verifyGif).length === 0){
                myGifTemplateGif.style.display="none"
                let divBox = document.createElement("div")
                divBox.classList.add("nofFoundImg")
                divBox.setAttribute("id","notFoundImgIdMyGif")
                let imgBox = document.createElement("img")
                imgBox.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-mis-gifos-sin-contenido.svg")
                divBox.appendChild(imgBox)
                let wordBox = document.createElement("div")
                wordBox.classList.add("wordsFavorites")
                let textBox1 = document.createElement("p")
                textBox1.textContent = `¡Anímate a crear tu primer GIFO!`
                wordBox.appendChild(textBox1)
                divBox.appendChild(wordBox)
                articleMyGif.appendChild(divBox)
            }else{
                let divToDelete = document.getElementById("notFoundImgIdMyGif")
                if(divToDelete){
                    divToDelete.remove()
                    myGifTemplateGif.style.display="grid"
                }else{
                    return 
                } 
            }
        } 
