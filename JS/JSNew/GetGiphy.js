class BuildGiphyBasic{
    constructor(nodo){
       this.nodo=nodo;
    }

    giphyDataLS(data){
        const dataArray = [];

        data.forEach(item=>{
            dataArray.push(item)
        });
        
        this.createGiphyBox(dataArray);
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

        this.createGiphyBox(dataArray)
    }
    
    createGiphyBox(data){
        this.nodo.innerHTML="";
        const dataArray = data;
        const itemArray = [];
    
        dataArray.forEach( item => {
            const div = document.createElement("div")
            div.classList.add("giphyBox")
            div.style.backgroundImage=`url(${item.img})`
            div.setAttribute("id",`${item.id}`)

            div.addEventListener("click",(event)=>{
                const target = event.target.id;
                if(target === "buttonHeart"){
                    this.saveLocalStorage([item],"itemsFav")
                    div.classList.add("addFont")
                }else if(target === "buttonMax"){
                    console.log("Aqui abriendo el modal")
                    BuildModal(item);
                }
            })
        
            div.innerHTML = `
                <div class="buttons" >
                    <button>
                        <i id="buttonHeart" class="fa-solid fa-heart"></i>
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
        
        this.nodo.append(...itemArray);
    }

    saveLocalStorage(data,key){
        const items = this.getLocalStorage(key)
        
        if(!items){
            localStorage.setItem(`${key}`,JSON.stringify([...data]))
        }else{
            const newData = [...items,...data]
            localStorage.setItem(`${key}`,JSON.stringify(newData))
        }
    }

    getLocalStorage(key){
        const items = JSON.parse(localStorage.getItem(`${key}`))
        return items;
    }
}


class BuildGiphyExtends extends BuildGiphyBasic{
    constructor({
        nodo,
        key,
        functionBuildPagination,
        nodoParent=undefined
    }){
       super(nodo);
       this.key=key;
       this.functionBuildPagination=functionBuildPagination;
       this.nodoParent=nodoParent;
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
        
        this.saveLocalStorage(dataArray,this.key)
        this.functionBuildPagination() 
        this.createGiphyBox(dataArray)
        this.nodoParent.style.display="flex"
    }
    
    deleteLocalStorage(key){
        localStorage.removeItem(key)
    }
}