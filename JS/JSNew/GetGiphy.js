function deleteGifLocalStorageById(id){
    let indexGifDelete;
    const arrayGif = this.getLocalStorage("itemsFav")

    arrayGif.forEach( (item,index) =>{
        if(item.id === id){
            indexGifDelete = index;
        }
    })

    arrayGif.splice(indexGifDelete,1)
    localStorage.setItem("itemsFav",JSON.stringify([...arrayGif]));
}

function saveLocalStorage(data,key){
    const items = this.getLocalStorage(key)
    
    if(!items){
        localStorage.setItem(`${key}`,JSON.stringify([...data]))
    }else{
        const newData = [...items,...data]
        localStorage.setItem(`${key}`,JSON.stringify(newData))
    }
}

function getLocalStorage(key){
    const items = JSON.parse(localStorage.getItem(`${key}`))
    return items;
}

function deleteLocalStorage(key){
    localStorage.removeItem(key)
}

class BuildGiphyBasic{
    constructor({
        nodo,
        tipo,
        key=undefined
    }){
       this.nodo=nodo;
       this.tipo=tipo;
       this.key=key;
    }

    giphyDataLS(data){
        const dataArray = [];

        data.forEach(item=>{
            dataArray.push(item)
        });
        
        this.createGiphyBox(this.nodo,dataArray,this.tipo);
    }

    giphyData(data){
        const dataArray = [];
    
        data.forEach( item => {
            const gif = {
                img :item.images.original.url,
                title :item.title,
                user :item.username,
                id :item.id
            }
            dataArray.push(gif)
        });



        if(this.tipo === "main" || this.tipo ===  "favoritos"){
            saveLocalStorage(dataArray,this.key)
            this.createGiphyBox(this.nodo,dataArray,this.tipo)
            this.nodo.parentElement.style.display="flex"
        }else{
            this.createGiphyBox(this.nodo,dataArray,this.tipo)
        }
    }
    
    createGiphyBox(nodo,data,tipo){
        nodo.innerHTML="";
        const dataArray = data;
        const itemArray = [];
        let buttonFirstGiphy;

        if(tipo === "favoritos"){
            buttonFirstGiphy = `<i id="buttonDelete" class="fa-solid fa-trash"></i>` 
        }else{
            buttonFirstGiphy = `<i id="buttonHeart" class="fa-solid fa-heart"></i>`
        }

        dataArray.forEach( item => {
            const div = document.createElement("div")

            div.classList.add("giphyBox")
            div.style.backgroundImage=`url(${item.img})`
            div.setAttribute("id",`${item.id}`)

            if(this.tipo === "trending"){
                div.classList.add("swiper-slide")
            }

            div.addEventListener("click",(event)=>{
                const target = event.target.id;
                if(target === "buttonHeart"){
                    saveLocalStorage([item],"itemsFav")
                    div.classList.add("addFont")

                    if(tipo === "trending"){
                        if(nodoFavGiphyParent.children.length != 0){
                            loadgingContentFavRoot()
                        }
                    }

                }else if(target === "buttonMax"){
                    BuildModal(item);
                }else if(target === "buttonDelete"){
                    const idGifDelete = div.id;
                    deleteGifLocalStorageById(idGifDelete);
                    loadgingContentFavRoot() 
                }
            })
                    
            div.innerHTML = `
                <div class="buttons" >
                    <button>
                        ${buttonFirstGiphy}
                    </button>
        
                    <button>
                        <i id="buttonMax" class="fa-solid fa-expand"></i>
                    </button>
                </div>
        
        
                <div class="titles">
                    <p>${item.title}</p>
                    <p>${item.user}</p>
                </div>
            ` 
            itemArray.push(div)

        }); 
        
        nodo.append(...itemArray);
    }
}


