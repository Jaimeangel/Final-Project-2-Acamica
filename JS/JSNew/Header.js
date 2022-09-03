const imgHeader = document.querySelector("header div img")
const menuRight = document.querySelector(".menuRight")
const navList = document.querySelector("header nav ul")
const nav = document.querySelector("header nav")

document.addEventListener('DOMContentLoaded',()=>{
    createRightMenu()
    createLeftImg()
    createDropdownMenu()
})

imgHeader.addEventListener("click",(event)=>{
    const target = event.target.id;
    tabSlideFeature(target);
})

function createLeftImg(){
    //cargando la imagen izquierda
    imgHeader.src="GIFOS-UI-Desktop+Mobile 6/assets/logo-desktop.svg"
    imgHeader.alt="Logotype"
    imgHeader.id="MainInit"
}

function createRightMenu(){
    //Creando checkbox y icono
    menuRight.innerHTML= `
        <label class="menu">
            <i id="menuContraido" class="fas fa-grip-lines"></i>
        </label>
    `
    
    const menu_hamburguesa = document.querySelector(".menuRight .menu")
    menu_hamburguesa.addEventListener("click",toggleIconMenu)

    navList.addEventListener("click",(event)=>{
        const tabs = event.target.id;
        tabSlideFeature(tabs)
        toggleIconMenu()
    });
}

function toggleIconMenu(){
    const menu_hamburguesa = document.querySelector(".menuRight .menu");
    const menu_hamburguesa_id = document.querySelector(".menuRight .menu i").id;

    if(menu_hamburguesa_id === "menuDesplegado"){
        menu_hamburguesa.innerHTML=`<i  id="menuContraido" class="fas fa-grip-lines"></i>`
        nav.classList.toggle("toggle_nav_display")
    }else if(menu_hamburguesa_id === "menuContraido" ){
       
        menu_hamburguesa.innerHTML=`<i id="menuDesplegado" class="fas fa-times"></i>`
        nav.classList.toggle("toggle_nav_display")
    }
}

function createDropdownMenu(){
    const items = ["Modo Diurno","Favoritos","Mis GIFOS"];
    const itemNav = [];
    
    items.forEach( (item) => {
        const li = document.createElement("li")
        li.setAttribute("id",`${item}`)
        li.textContent=`${item}`
        itemNav.push(li)
    });

    navList.append(...itemNav)

}

