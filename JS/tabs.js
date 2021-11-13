//HTML articles
let favoritePage = document.querySelector(".favoritePage")
let misGifPage = document.querySelector(".misGifPage")
let mainPage = document.querySelector(".mainPage")

//Selecioner change tabs
let favoriteTabMode = document.getElementById("favoriteTab")
let misGifTabMode = document.getElementById("misGifTab")
let mainTabMode = document.getElementById("mainTab")


//Events Handlers Tabs
favoriteTabMode.addEventListener("click",(e)=>{
    e.preventDefault() 
    favoriteChangeTab()
})
misGifTabMode.addEventListener("click",(e)=>{
    e.preventDefault() 
    misGifChangeTab()
}) 
mainTabMode.addEventListener("click",(e)=>{
    e.preventDefault() 
    mainChangeTab()
}) 

//Function change tabs
function favoriteChangeTab(){
    mainPage.style.display="none"
    misGifPage.style.display="none"
    favoritePage.style.display="flex"
} 
function misGifChangeTab(){
    mainPage.style.display="none"
    favoritePage.style.display="none"
    misGifPage.style.display="flex"
    
} 
function mainChangeTab(){
    mainPage.style.display="flex"
    favoritePage.style.display="none"
    misGifPage.style.display="none"
}