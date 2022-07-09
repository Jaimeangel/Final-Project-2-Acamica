const giphyGrid = document.querySelector(".gyphy")
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
    }
}