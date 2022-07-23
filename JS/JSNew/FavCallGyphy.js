function getLocalStorage(key){
    const items = JSON.parse(localStorage.getItem(`${key}`))
    return items;
};

const FavGiphy = new BuildGiphyBasic(nodes.fav.node);


const LoadingGiphysFavRootUpdate = ()=>{
    const favDataFetch = getLocalStorage(nodes.fav.key);
    FavGiphy.giphyData(favDataFetch)
}; 

const loadgingContentFavRoot=()=>{
    nodoFavGiphyParent.innerHTML=""

    const h2Title = document.createElement("h2");
    h2Title.textContent="Favoritos"
    
    const giphyContent = document.createElement("section");
    giphyContent.classList.add("gyphy")

    nodoFavGiphyParent.append(h2Title,giphyContent);

    const FavGiphy = new BuildGiphyBasic(giphyContent);
    const favDataFetch = getLocalStorage(nodes.fav.key)

    FavGiphy.giphyDataLS(favDataFetch)
};
