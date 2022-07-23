/* Nodes Main section */
const nodoMainGiphyParent = document.querySelector(".fetchGiphy");
const giphyGrid = document.querySelector(".fetchGiphy .gyphy");
const nodoMainIntroduction = document.querySelector("main");


/* Nodes Fav section */
const nodoFavGiphyParent = document.querySelector(".fetchFavGiphy");
const favGiphyGrid = document.querySelector(".fetchFavGiphy .gyphy");
console.log(nodoFavGiphyParent,favGiphyGrid)





const btnMoreGIF = document.querySelector(".optionsMoreGifs .btnPlus"); 
/* Main Key */
const key="wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"
/* Acces link fetch API */
const linkSearch ="https://api.giphy.com/v1/gifs/search/tags?api_key="
const linkTrending = "https://api.giphy.com/v1/trending/searches?api_key="
const linkGet= "https://api.giphy.com/v1/gifs/search?api_key="
/* Bound */
const boundSearch="&q="
/* Variables */
let init = 12
let limit = (value)=>(`&limit=${value}`) 
let offSetLink= (value)=>(`&offset=${value}`) 
let currentPage = 1;
const itemLenght = init;

const nodes = {
    offSet:0,
    main: {
        node:giphyGrid,
        key:"items"
    },
    fav:{
        node:favGiphyGrid,
        key:"itemsFav"
    }
}

const iconRight = document.getElementById("right")
const iconLeft = document.getElementById("left")
