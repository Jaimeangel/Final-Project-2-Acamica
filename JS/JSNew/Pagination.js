class PaginationBuilder{
    constructor({
        currentPage=0,
        numberPages=0,
        boxLenght=12,
        key,
        nodoGifs,
        displayFunction,
        nodoPagination
    }){
        this.currentPage=currentPage;
        this.boxLenght=boxLenght;
        this.numberPages=numberPages;
        this.key=key;
        this.nodoGifs=nodoGifs;
        this.displayFunction=displayFunction;
        this.nodoPagination=nodoPagination;
    }

    paginationBuild(){
        
        const itemGetLSLenght = this.getLocalStorage(this.key).length;
        const numberPag = Number(itemGetLSLenght/this.boxLenght);
    
        const btnPag = document.createElement("button")
        btnPag.textContent=`${numberPag}`
        this.nodoPagination.appendChild(btnPag)
    
        this.numberPages++
        this.currentPage++
        this.activeButtonUI()
    }
    
    activeButtonUI(){
        const botones = Object.values(this.nodoPagination.children);

        botones.forEach( (item) =>{
            if(item.classList.contains("active")){
                item.classList.remove("active")
            }
        });

        botones.forEach( (item) =>{
            const value = Number(item.innerText) 
            if(value === this.currentPage){
                item.classList.add("active")
            }  
        });

        this.currentPage = this.numberPages;
    }

    togglePagination(e){
        const itemGetLS = this.getLocalStorage(this.key);
        const valueButton = Number(e.target.innerText);
        this.currentPage = valueButton;
        this.displayItems(this.displayFunction,itemGetLS,this.currentPage,this.boxLenght,this.nodoGifs);
    }
    
    displayItems(callback,items,page,itemsPorPage,nodo){
        const ArrayItems = [];
        page--;
    
        const start = itemsPorPage*page;
        const end = start + itemsPorPage;
        const ArrayItemsSlice = items?.slice(start,end)
    
        for(let i = 0; i < ArrayItemsSlice?.length; i++) {
            const item = ArrayItemsSlice[i]
            ArrayItems.push(item)
        }
    
        callback(nodo,ArrayItems);
        this.activeButtonUI()
    }

    getLocalStorage(key){
        const items = JSON.parse(localStorage.getItem(`${key}`))
        return items;
    }
}





