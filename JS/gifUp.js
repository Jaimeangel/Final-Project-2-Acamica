        let myGifTemplateGif = document.getElementById("myGifSectionGifNew")

        document.addEventListener("DOMContentLoaded",()=>{leerLSGifUploadLoad()}) 
        document.addEventListener("DOMContentLoaded",()=>{nullGifOwn()}) 


        const obtenerGifsIdUploadLocalStorage=()=>{
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
               
            let divTrash= document.createElement("div")
            divTrash.classList.add("box_li_btn_heart")
            let btnTrash = document.createElement("button")
            let imgBtnTrash= document.createElement("img")
            imgBtnTrash.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon_trash.svg")
            divTrash.setAttribute("data-id",`${GifUpload.idGif}`)
            btnTrash.appendChild(imgBtnTrash)
            divTrash.appendChild(btnTrash)
            divBtn.appendChild(divTrash)
               
            //Event Handler Modal
            divTrash.addEventListener("click", (e)=>{
                /* let idGif = GifUpload.idGif */

                e.preventDefault()
                let item = e.target
                let deleteBoxGif = item.parentElement.parentElement.parentElement.parentElement
                
    
                setTimeout(()=>{
                    deleteBoxGif.remove()
                },0)

                removeItemMyGifId(GifUpload.idGif) /* Remueve id del gif LS */
                removeItemMyGif(GifUpload.idGif) /* Remueve informacion del gif LS */
                nullGifOwn()
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
                imgGifUrl = GifUpload.imgGifUrl
                userGif = GifUpload.userGif
                nameGif = GifUpload.nameGif
                idGif = GifUpload.idGif
               
                buildingModal(imgGifUrl,userGif,nameGif,idGif)
            })
               
            let divAutor = document.createElement("div")
            divAutor.classList.add("box_autor")
               
            let divPrfOne = document.createElement("div")
            divPrfOne.classList.add("p_user") 
            divPrfOne.innerText=`${GifUpload.userGif}`
            divAutor.appendChild(divPrfOne)
               
            let divPrfTwo = document.createElement("div")
            divPrfTwo.classList.add("p_name") 
            divPrfTwo.innerText=`${GifUpload.nameGif}`
            divAutor.appendChild(divPrfTwo)
               
            divCtn.appendChild(divAutor) 
        
            myGifTemplateGif.appendChild(divCtn)
            });
        }

       const nullGifOwn = ()=>{
           /* Cumple la misma funcion que anterior
           Verifica si hay elementos en LS si no hay 
           entonces crea elemento  */
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
                /* Si ya hay elementos en LS entonces borra Elemento */
                let divToDelete = document.getElementById("notFoundImgIdMyGif")
                if(divToDelete){
                    divToDelete.remove()
                    myGifTemplateGif.style.display="grid"
                }else{
                    return 
                } 
            }
        
        
        }

        const removeItemMyGifId = (item)=>{
            let uploadGifId;
            //Toma valor de un arreglo con datos del LS
            uploadGifId = obtenerGifsIdUploadLocalStorage();
            
            favoritosIndexDelete = uploadGifId.findIndex(function(ed){ return ed.idGif === item})
            
            uploadGifId.splice(favoritosIndexDelete,1)
        
            localStorage.setItem('uploadGifId', JSON.stringify(uploadGifId))
        }

        const removeItemMyGif = (item)=>{
            let uploadGif;
            //Toma valor de un arreglo con datos del LS
            uploadGif = obtenerGifsUploadLocalStorage();
          
            favoritosIndexDelete = uploadGif.findIndex(function(ed){ return ed.idGif === item})
        
            uploadGif.splice(favoritosIndexDelete,1)
        
            localStorage.setItem('uploadGif', JSON.stringify(uploadGif))
        }
