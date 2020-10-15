//HTML articles
let favoritePage = document.querySelector(".favoritePage")
let misGifPage = document.querySelector(".misGifPage")
let mainPage = document.querySelector(".mainPage")

//Selecioner change tabs
let favoriteTabMode = document.getElementById("favoriteTab")
let misGifTabMode = document.getElementById("misGifTab")



//Events Handlers Tabs
favoriteTabMode.addEventListener("click",(e)=>{
    e.preventDefault() 
    const item = e.target.parentNode.childNodes[1].id
    /* console.log(item) */
    selectTab(item)
})
misGifTabMode.addEventListener("click",(e)=>{
    e.preventDefault() 
    const item = e.target.parentNode.childNodes[1].id
    /* console.log(item) */
    selectTab(item)
}) 

//Selection tab
function selectTab(item){
    if(item === "favoriteTab"){
        favoriteChangeTab()
    }else if(item === "misGifTab"){
        misGifChangeTab()
    }
}

//Function change tabs
function favoriteChangeTab(){
    if(favoriteTabMode.checked){
        mainPage.style.display="none"
        misGifPage.style.display="none"
        favoritePage.style.display="flex"
    }
} 
function misGifChangeTab(){
    if(misGifTabMode.checked){
        mainPage.style.display="none"
        favoritePage.style.display="none"
        misGifPage.style.display="flex"
    }
} 