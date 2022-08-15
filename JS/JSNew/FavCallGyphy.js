function getLocalStorage(key){
    const items = JSON.parse(localStorage.getItem(`${key}`))
    return items;
};

const favGiphyGrid = document.querySelector(".fetchFavGiphy .gyphy");
const favPagination= document.querySelector(".fetchFavGiphy .optionsMoreGifs .pagination");

const FavGiphy = new BuildGiphyBasic(
    {
    nodo:favGiphyGrid,
    tipo:"favoritos",
    key: "itemsFav"
    }
);

const FavBuildPagination = new PaginationBuilder({
    keyLS:"itemsFav",
    nodoGifs:favGiphyGrid,
    displayFunction:FavGiphy.createGiphyBox,
    nodoPagination:favPagination,
    tipo:"favoritos"
}) 

favPagination.addEventListener("click",(event)=>FavBuildPagination.togglePagination(event));

const loadgingContentFavRoot=()=>{
    const favDataFetch = getLocalStorage("itemsFav");

    FavGiphy.giphyDataLS(favDataFetch);
    FavBuildPagination.paginationBuilMethodTwo();
    FavBuildPagination.displayItems();
};
