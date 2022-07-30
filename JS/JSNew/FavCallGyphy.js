function getLocalStorage(key){
    const items = JSON.parse(localStorage.getItem(`${key}`))
    return items;
};

/* const FavGiphy = new BuildGiphyBasic(nodes.fav.node,"favoritos"); */


/* const LoadingGiphysFavRootUpdate = ()=>{
    const favDataFetch = getLocalStorage(nodes.fav.key);
    FavGiphy.giphyData(favDataFetch)
};  */

const favGiphyGrid = document.querySelector(".fetchFavGiphy .gyphy");
const favPagination= document.querySelector(".fetchFavGiphy .optionsMoreGifs .pagination");




const FavGiphy = new BuildGiphyExtends({
    nodo:favGiphyGrid,
    tipo:"favoritos",
    key:"itemsFav"
});

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
