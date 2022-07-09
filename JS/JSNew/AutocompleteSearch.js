const inputSearch = document.querySelector(".search input");
const ul = document.querySelector(".suggestions ul");
const suggestions = document.querySelector(".suggestions")
const titleGiphy = document.querySelector(".fetchGiphy h2")


ul.addEventListener("click", (event)=>eventTarget(event))
btnMoreGIF.addEventListener("click",(event)=>eventTarget(event))

iconRight.addEventListener("click",(event)=>{
    const id = event.target.id
    inputFunctionalities(id)
})

iconLeft.addEventListener("click",(event)=>{
    const id = event.target.id
    inputFunctionalities(id)
})


//Funcionalidad
/* De Aqui viene la busqueda desde el boton de lupa cuando no hay tabla de autocompletar */
function inputFunctionalities(type){
    switch(type){
        case "xmark":
            OrganizeIconAndValueInput()
            break;
        case "glass":
            const value = inputSearch.value;
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            OrganizeIconAndValueInput(value)
            break;
    }
}
//UI
//Esta funcion cambia de lugar en cada uno de los extremos
//Los iconos de lupa y de X cuando el usuario ingrese un valor
//o Cuando el valor sea nulo
function changeIconPosition(trigger){
    if(!trigger){
        loadingIcon()
    }else{
        changeIconPlace()
    }
}

//UI
//Esta funcion limpia los items si existen
function deleteItemsAutocomplete(){
    ul.innerHTML=""
}
//UI
//Esta funcion permite agrupar a otras funciones y su resultado
//Deberia ser el siguiente
//-Esconder la barra de autocompletar
//-Borrar el contenido de ul de la seccion autocompletar(items)
//-Cambiar posicion de iconos
//-Poner el valor de busqueda en el input
function OrganizeIconAndValueInput(value=""){
    inputSearch.value=`${value}`
    changeIconPosition("")
    deleteItemsAutocomplete()
    autocompleteTableUI(0)
}
//Funcionalidad
function counter(value){
    let count = nodes.offSet + value
    nodes.offSet= count
    return nodes.offSet;
}
//Funcionalidad
/* De Aqui vienen las busquedas desde la seccion de sugerencias */
/* Dependiendo de en que parte clikee el usuario */
function eventTarget(e){
    let offCounter;
    const element = e.target;
    let item;
    let value;

    switch(element.tagName){
        case "I":
            const parent = element.parentElement;
            item = parent.children[1];
            value = item.innerHTML
            OrganizeIconAndValueInput(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            break
        case "LI":
            item = element.children[1];
            value = item.innerHTML
            OrganizeIconAndValueInput(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            break
        case "P":
            value = element.innerHTML
            OrganizeIconAndValueInput(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,0)
            break
        case "BUTTON":
            offCounter = counter(12)
            value = inputSearch.value;
            OrganizeIconAndValueInput(value)
            titleValueGiphy(value,titleGiphy)
            getGiphy(value,offSetLink,offCounter)
            break
    }

}

//UI
//Esta funcion permite añadir
function itemsAutocompleteTable(array,nodo){
    deleteItemsAutocomplete()
    const liItem = []
    const data = []
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

//UI
//Esta funcion se encarga de mostrar y esconder
//La tabla de autocompletar de las sugerencias
function autocompleteTableUI(longitud){
    if(longitud != 0){
        //Clase table hace que no haya traslapacion de los bordes
        //De input y la tabla de sugerencias
        inputSearch.classList.add("table")
        //La tabla de sugerencias tiene relacionado un elemento html ya existente
        //Esta clase permite hacerlo visible
        suggestions.classList.add("block")
    }else{
        inputSearch.classList.remove("table")
        suggestions.classList.remove("block")
    }
} 
//Funcionalidad
//Esta evento permite escuchar el input por cada vez que se actualice su valor
inputSearch.onkeyup = async (e)=>{
    const valueTarget = e.target.value;
    //Esta funcion permite cambiar de lugar de extremos
    //Los iconos de lupa y x, segun sea el caso
    changeIconPosition(valueTarget);

    const fetch = await fetchApi(linkSearch,key,boundSearch,valueTarget)
    const fetchLenght = Object.keys(fetch).length
    itemsAutocompleteTable(fetch,ul)
    autocompleteTableUI(fetchLenght)
}  