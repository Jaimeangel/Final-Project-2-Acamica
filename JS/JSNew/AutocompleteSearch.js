class SearchInput{
    constructor({
        inputNodo,
        autocompleteNodo,
        ulAutocompleteNodo,
        titleNodo,
        dataSearch,
        MainFetch,
    }){
        this.inputNodo=inputNodo;
        this.autocompleteNodo=autocompleteNodo;
        this.ulAutocompleteNodo=ulAutocompleteNodo;
        this.titleNodo=titleNodo;
        this.dataSearch=dataSearch;
        this.MainFetch=MainFetch;
    }

    changeIconPosition(trigger){
        if(!trigger){
            loadingIcon()
        }else{
            changeIconPlace()
        }
    }

    deleteItemsAutocomplete(){
        this.ulAutocompleteNodo.innerHTML="";
    }

    itemsAutocompleteTable(array,nodo){
        this.deleteItemsAutocomplete()

        const liItem = [];
        const data = [];

        array.forEach(item => data.push(item.name))
        data.forEach( item => {
            const li = document.createElement("li")
            li.innerHTML= `
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>${item}</p>
            `
            liItem.push(li)
        })
    
        nodo.append(...liItem)
    }

    autocompleteTableUI(longitud){
        if(longitud != 0){
            //Clase table hace que no haya traslapacion de los bordes
            //De input y la tabla de sugerencias
            this.inputNodo.classList.add("table")
            //La tabla de sugerencias tiene relacionado un elemento html ya existente
            //Esta clase permite hacerlo visible
            this.autocompleteNodo.classList.add("block")
        }else{
            this.inputNodo.classList.remove("table")
            this.autocompleteNodo.classList.remove("block")
        }
    } 

    OrganizeIconAndValueInput(value=""){
        this.inputNodo.value=`${value}`
        this.changeIconPosition(value)
        this.deleteItemsAutocomplete()
        this.autocompleteTableUI(0)
    }

    titleValueGiphy(value,nodo){
        nodo.innerHTML=""
        nodo.innerHTML=`${value.toUpperCase()}`
    }

    counter(value){
        let count = nodes.offSet + value
        nodes.offSet= count
        return nodes.offSet;
    }

    eventTarget(e){
        let offCounter;
        const element = e.target;
        let item;
        let value;
    
        switch(element.tagName){
            case "I":
                const parent = element.parentElement;
                item = parent.children[1];
                value = item.innerHTML
                this.OrganizeIconAndValueInput(value)
                this.titleValueGiphy(value,this.titleNodo)
                this.MainFetch(value,0)
                break
            case "LI":
                item = element.children[1];
                value = item.innerHTML
                this.OrganizeIconAndValueInput(value)
                this.titleValueGiphy(value,this.titleNodo)
                this.MainFetch(value,0)
                break
            case "P":
                value = element.innerHTML
                this.OrganizeIconAndValueInput(value)
                this.titleValueGiphy(value,this.titleNodo)
                this.MainFetch(value,0)
                break
            case "BUTTON":
                if(this.inputNodo.value){
                    offCounter = this.counter(12)
                    value = inputSearch.value;
                    this.OrganizeIconAndValueInput(value)
                    this.titleValueGiphy(value,this.titleNodo)
                    this.MainFetch(value,offCounter)
                }else{
                    return
                }
                break
        }
    
    }

    inputFunctionalities(type){
        switch(type){
            case "xmark":
                this.OrganizeIconAndValueInput()
                break;
            case "glass":
                const value = this.inputNodo.value;
                this.titleValueGiphy(value,this.titleNodo)
                this.MainFetch(value,0)
                this.OrganizeIconAndValueInput(value)
                break;
        }
    }


    onKeyUpInput(){
        this.inputNodo.onkeyup = async (e)=>{
            const valueTarget = e.target.value;

            this.changeIconPosition(valueTarget);
        
            const fetch = await this.dataSearch.fetchApi(valueTarget)
            const fetchLenght = Object.keys(fetch).length
            
            this.itemsAutocompleteTable(fetch,this.ulAutocompleteNodo)
            this.autocompleteTableUI(fetchLenght)
        } 
    }
}

