const inputSearch = document.querySelector(".search input");
const suggestions = document.querySelector(".suggestions")
const ul = document.querySelector(".suggestions ul");
const titleGiphy = document.querySelector(".fetchGiphy h2")
const pagination = document.querySelector(".fetchGiphy .optionsMoreGifs .pagination");


const MainDataFetch = new FetchData({
    link:"https://api.giphy.com/v1/gifs/search?api_key=",
    bound:"&q=",
    limit:"&limit=12"
})

const MainGiphy = new BuildGiphyBasic({
    nodo:nodes.main.node,
    tipo:"main",
    key:nodes.main.key
}
)

const BuildPagination = new PaginationBuilder({
    keyLS:nodes.main.key,
    nodoGifs:nodes.main.node,
    displayFunction:MainGiphy.createGiphyBox,
    nodoPagination:pagination,
    nodoButonMoreGif:btnMoreGIF
}) 

pagination.addEventListener("click",(event)=>BuildPagination.togglePagination(event));

const LoadingGiphysMainRoot= async (value,offset)=>{
    const DataGifs = await MainDataFetch.fetchApi(value,"&offset=",offset)
    
    MainGiphy.giphyData(DataGifs);
    
    BuildPagination.paginationBuild();
}


const InputSearchDataFetch = new FetchData({
    link:"https://api.giphy.com/v1/gifs/search/tags?api_key=",
    bound:"&q="
});

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

