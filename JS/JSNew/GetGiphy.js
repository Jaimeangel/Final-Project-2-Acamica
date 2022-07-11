



class BuildGiphy{
    constructor({
        nodo,
        key,
        functionBuildPagination
    }){
       this.nodo=nodo;
       this.key=key;
       this.functionBuildPagination=functionBuildPagination;
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
        this.createGiphyBox(this.nodo,dataArray)
    }
    
    createGiphyBox(nodo,data){
        nodo.innerHTML="";
        const dataArray = data;
        const itemArray = [];
    
        dataArray.forEach( item => {
            const div = document.createElement("div")
            div.classList.add("giphyBox")
            div.style.backgroundImage=`url(${item.img})`
            div.setAttribute("id",`${item.id}`)
        
            div.innerHTML = `
                <div class="buttons" >
                    <button>
                        <i class="fa-regular fa-heart"></i>
                    </button>
        
                    <button>
                        <i class="fa-solid fa-expand"></i>
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
    
    deleteLocalStorage(key){
        localStorage.removeItem(key)
    }
}