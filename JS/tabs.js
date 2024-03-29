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
    menu.classList.toggle("none")
    menuX.style.display="none"
    menuGrip.style.display="block"
    favoriteChangeTab()
})
misGifTabMode.addEventListener("click",(e)=>{
    menu.classList.toggle("none")
    menuX.style.display="none"
    menuGrip.style.display="block"
    misGifChangeTab()
}) 
mainTabMode.addEventListener("click",(e)=>{
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