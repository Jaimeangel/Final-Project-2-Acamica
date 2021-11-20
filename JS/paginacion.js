const galleryItems = document.querySelector(".gifBox").children
const paginationInsert = document.querySelector(".pagination")
const ctnNumberPagination = document.querySelector(".numberPaginationDiv")

//Numero maximo de Gif permitidos
const maxItem = 12
//Es la pagina actual que repesenta los gif que se muestran segun indique la paginacion
let index = 1

//Si hay mas 12 Gif entonces empieza el proceso de paginacion
//Con la funcion showItems()
const contarGif=()=>{
	if(galleryItems.length > maxItem){
		showItems()
	}
}

//Quita el :Hover de todos lo botones de la seccion paginacion
const removeHoverBtn = ()=>{
	const ctnHoverPag = document.querySelector(".numberPaginationDiv div.hoverBtnPagination")
	ctnHoverPag.classList.remove("hoverBtnPagination")
}

//Pone hover al boton seleccionado
const hoverBtn = (btnSelec)=>{
	btnSelec.classList.add("hoverBtnPagination")
}

//Funcion encargada de mostrar Gif de acuerdo al numero de index
//El cual es controlado por la funcion paginatioNumber
const showItems= ()=> {
  	for(let i=0;i<galleryItems.length; i++){
  	 	galleryItems[i].classList.remove("show")
  	 	galleryItems[i].classList.add("hide")

  	    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
  	 	    // if i greater than and equal to (index*maxItem)-maxItem;
  		    // means  (1*8)-8=0 if index=2 then (2*8)-8=8
            galleryItems[i].classList.remove("hide")
            galleryItems[i].classList.add("show")
    	}
  	}
} 

