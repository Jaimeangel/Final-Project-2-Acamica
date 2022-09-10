function getLocalStorage(key){
    let items = JSON.parse(localStorage.getItem(`${key}`))
    if(!items){
        localStorage.setItem(`${key}`,JSON.stringify([]))
        items = JSON.parse(localStorage.getItem(`${key}`))
    }

    return items;
};

const favGiphyGrid = document.querySelector(".fetchFavGiphy .sectionGifFavoritos .gyphy");
const favPagination= document.querySelector(".fetchFavGiphy .sectionGifFavoritos .optionsMoreGifs .pagination");

const FavGiphy = new BuildGiphyBasic(
    {
    nodo:favGiphyGrid,
    tipo:"favoritos",
    key: "itemsFav"
    }
);

const FavNoContent = new NoContent({
    type:"favoritos",
    message1:"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!",
    img:"https://cdn.iconscout.com/icon/premium/png-256-thumb/ouch-bubble-3468672-2900993.png" 
})


const FavBuildPagination = new PaginationBuilder({
    keyLS:"itemsFav",
    nodoGifs:favGiphyGrid,
    displayFunction:FavGiphy.createGiphyBox,
    nodoPagination:favPagination,
    tipo:"favoritos"
}) 

favPagination.addEventListener("click",(event)=>FavBuildPagination.togglePagination(event));

const loadgingContentFavRoot=()=>{

    if (!getLocalStorage("itemsFav").length) {
        FavNoContent.conditions(null,"noGif");
    }else{
        FavNoContent.conditions(null,"Gif");
    }
    
    const favDataFetch = getLocalStorage("itemsFav");
    FavGiphy.giphyDataLS(favDataFetch);
    FavBuildPagination.paginationBuilMethodTwo();
    FavBuildPagination.displayItems();
};
