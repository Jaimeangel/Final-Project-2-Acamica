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
        <input name="menu" type="checkbox" id="menu">
        <label for="menu">
            <i class="fas fa-grip-lines"></i>
        </label>
    `
    //Evento para cambiar forma de icono menu right
    const checkBox = document.querySelector(".menuRight input")
    checkBox.addEventListener("click",toggleIconMenu)

    navList.addEventListener("click",(event)=>{
        const tabs = event.target.id;
        tabSlideFeature(tabs)
        checkBox.click()
        toggleIconMenu()
    });
}

function toggleIconMenu(){
    //Cambio de icono del menu right
    //Funcion usada en evento de la funcion "createMenuRight"
    const checkBox = document.querySelector(".menuRight input")
    const label = document.querySelector(".menuRight label")

    if(!checkBox.checked){
        //icono rejillas
        label.innerHTML=`<i class="fas fa-grip-lines"></i>`
        //Escondemos el nav
        nav.style.display="none"
    }else{
        //icono x
        label.innerHTML=`<i class="fas fa-times"></i>`
        //Abrimos el nav
        nav.style.display="block"
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

