class PaginationBuilder{
    constructor({
        currentPage=0,
        numberPages=0,
        boxLenght=12,
        keyLS,
        displayFunction,
        nodoGifs,
        nodoPagination,
        nodoButonMoreGif,
        tipo=null
    }){
        this.currentPage=currentPage;
        this.boxLenght=boxLenght;
        this.numberPages=numberPages;
        this.keyLS=keyLS;
        this.nodoGifs=nodoGifs;
        this.displayFunction=displayFunction;
        this.nodoPagination=nodoPagination;
        this.nodoButonMoreGif=nodoButonMoreGif;
        this.tipo=tipo;
    }

    paginationBuild(){
        
        const itemGetLSLenght = this.getLocalStorage(this.keyLS).length;
        const numberPag = Math.ceil(Number(itemGetLSLenght/this.boxLenght))



        const btnPag = document.createElement("button")
        btnPag.textContent=`${numberPag}`
        this.nodoPagination.appendChild(btnPag)
    
        this.numberPages++
        this.currentPage++
        this.activeButtonUI()
        this.buttonMoreGif()
    }

    paginationBuilMethodTwo(){
        this.nodoPagination.innerHTML=""

        const itemGetLSLenght = this.getLocalStorage(this.keyLS).length;
        const numberPag = Math.ceil(Number(itemGetLSLenght/this.boxLenght));
        const itemPagination= [];
    

        for (let i=1; i < numberPag +1; i++) {
            itemPagination.push(i)
        }

        const maxItemPagination = Math.max(...itemPagination)

        for (let index = 0; index < itemPagination.length; index++) {
            const btnPag = document.createElement("button")
            btnPag.textContent= itemPagination[index]
            this.nodoPagination.append(btnPag)
            
        }

        this.currentPage = maxItemPagination;
        this.numberPages = maxItemPagination;
        this.activeButtonUI();
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

    buttonMoreGif(){
        if(this.nodoButonMoreGif){
            this.nodoButonMoreGif.innerHTML=""
            const btn = document.createElement("button")
            btn.textContent="Ver Mas"
            this.nodoButonMoreGif.appendChild(btn)
        }
    }

    togglePagination(e){
        /* const itemGetLS = this.getLocalStorage(this.keyLS); */
        const valueButton = Number(e.target.innerText);
        this.currentPage = valueButton;
        /* this.displayItems(this.displayFunction,itemGetLS,this.currentPage,this.boxLenght,this.nodoGifs); */
        this.displayItems()
    }
    
    displayItems(){
        const itemGetLS = this.getLocalStorage(this.keyLS);
        const ArrayItems = [];
        let page = this.currentPage;
        page--
    
        const start = this.boxLenght*page;
        const end = start + this.boxLenght;
        const ArrayItemsSlice = itemGetLS?.slice(start,end)
    
        for(let i = 0; i < ArrayItemsSlice?.length; i++) {
            const item = ArrayItemsSlice[i]
            ArrayItems.push(item)
        }
    
        this.displayFunction(this.nodoGifs,ArrayItems,this.tipo);
        this.activeButtonUI()
    }

    getLocalStorage(key){
        const items = JSON.parse(localStorage.getItem(`${key}`))
        return items;
    }
}





