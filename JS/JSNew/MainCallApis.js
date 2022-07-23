const inputSearch = document.querySelector(".search input");
const ul = document.querySelector(".suggestions ul");
const suggestions = document.querySelector(".suggestions")
const titleGiphy = document.querySelector(".fetchGiphy h2")
const pagination = document.querySelector(".optionsMoreGifs .pagination");



function paginationBridge(){
    BuildPagination.paginationBuild()
}

//Esta funcion permite la creacion de los Gifs especificamente
//En la seccion Main 
//Se compone de dos instancias de prototipos
//Esta instancia permite hacer un llamado a la API de busqueda de Gyphy
//Los parametros estan establecidos para buscar gif segun el valor establecido (value)
const MainDataFetch = new FetchData({
    link:"https://api.giphy.com/v1/gifs/search?api_key=",
    bound:"&q=",
    limit:"&limit=12"
})

//Esta instancia del prototipo MainGiphy se encarga exclusivamete
//De la interfaz grafica de los Gifs asi como de guardarlos en LS
//Recibe dos parametros el Nodo de Main y key donde se debe guardar en LS
const MainGiphy = new BuildGiphyExtends({
    nodo:nodes.main.node,
    key:nodes.main.key,
    functionBuildPagination:paginationBridge,
    nodoParent:nodoMainGiphyParent
})

const BuildPagination = new PaginationBuilder({
    key:nodes.main.key,
    nodoGifs:nodes.main.node,
    displayFunction:MainGiphy.createGiphyBox,
    nodoPagination:pagination,
    nodoButonMoreGif:btnMoreGIF
}) 

pagination.addEventListener("click",(event)=>BuildPagination.togglePagination(event));

const LoadingGiphysMainRoot= async (value,offset)=>{
    //Aqui llamamos  metodo de la instancia fetchApi()
    //Le damos el valor de busqueda y el offse que para primeras busquedas
    //Deberia ser cero y para explorar mas gifs con el boton "Ver mas"
    //Se debe incrementar en 12
    const DataGifs = await MainDataFetch.fetchApi(value,"&offset=",offset)
    
    //Este metodo de la instancia empieza el proceso de crear y guardar los gifs
    MainGiphy.giphyData(DataGifs)
}


//Con esta instancia del prototipo FetchData hacemos el llamador
//Al endpoint del API que nos devuelve las sugerencias segun el valor ingresado
const InputSearchDataFetch = new FetchData({
    link:"https://api.giphy.com/v1/gifs/search/tags?api_key=",
    bound:"&q="
});

//Hacemos una instancia del prototipo SearchInput
//Este prototipo genera las funciones de SearchBar como:
//-Mostar sugerencias segun la palabra ingresada
//-Mostar las sugerencias en un barra adherida al SearchBar
//-Permitir las funciones de busqueda de Gif segun el lugar donde se clickee
//Los parametros que recibe son principalmente Nodos referentes al input
//Las funciones que permiten buscar las sugerencias y la funcion que permite
//Buscar y crear los Gifs
const AutocompleteInput = new SearchInput({
    inputNodo:inputSearch,
    autocompleteNodo:suggestions,
    ulAutocompleteNodo:ul,
    titleNodo:titleGiphy,
    dataSearch:InputSearchDataFetch,
    MainFetch:LoadingGiphysMainRoot,
});


const inputSearchWorking=()=>{
    ul.addEventListener("click", (event)=>AutocompleteInput.eventTarget(event));
    btnMoreGIF.addEventListener("click", (event)=>AutocompleteInput.eventTarget(event));

    iconRight.addEventListener("click",(event)=>{
        const id = event.target.id
        //Esta funcion permite realizar acciones segun el tipo de icono que se clickee
        //Por ejemplo buscar mas gifs (boton "Ver mas")o eliminar valor ingresado
        AutocompleteInput.inputFunctionalities(id)
    });

    iconLeft.addEventListener("click",(event)=>{
        const id = event.target.id
        //Esta funcion permite realizar acciones segun el tipo de icono que se clickee
        //Por ejemplo buscar mas gifs (boton "Ver mas")o eliminar valor ingresado
        AutocompleteInput.inputFunctionalities(id)
    });
    
    //Aqui se da inicio a las funciones de sugerencia y busqueda de Gifs
    AutocompleteInput.onKeyUpInput();
}

inputSearchWorking();

