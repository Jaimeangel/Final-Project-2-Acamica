//Dark Variable
let darkModeEvent = document.getElementById("darkMode")

//Dark Mode
darkModeEvent.addEventListener("click",darkStyles)


function darkStyles(){
    if(darkModeEvent.checked){
        document.body.classList.add("dark-mode")
    }else{
        document.body.classList.remove("dark-mode")
    }
}