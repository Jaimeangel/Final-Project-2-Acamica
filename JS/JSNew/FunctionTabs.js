const NODOS_SECTION = [
    {
        target:"introduction",
        nodo:nodoMainIntroduction
    },
    {
        target:"main",
        nodo:nodoMainGiphyParent
    },
    {
        target:"Favoritos",
        nodo:nodoFavGiphyParent
    }
];


function tabSlideFeature(target){
    /* const items = ["Modo Diurno","Favoritos","Mis GIFOS"]; */
    if(target === "Favoritos"){
        nodoMainGiphyParent.style.display="none";
        nodoMainIntroduction.style.display="none";
        nodoFavGiphyParent.style.display="flex";
        loadgingContentFavRoot()
    }else if(target === "MainInit"){
        nodoMainGiphyParent.style.display="flex";
        nodoMainIntroduction.style.display="flex";
        nodoFavGiphyParent.style.display="none";
    }
}