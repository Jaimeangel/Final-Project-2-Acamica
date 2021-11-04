const galleryItems = document.querySelector(".gifBox").children
const paginationInsert = document.querySelector(".pagination")
const ctnNumberPagination = document.querySelector(".numberPaginationDiv")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const maxItem = 12
const maxBtn = 5
let index = 1
let contBtn = 1

function contarGif(){
	if(galleryItems.length > maxItem){
		console.log(galleryItems.length)
		startBegin()
	}else{
		console.log('No hay suficientes Gif')
	}
}

prev.addEventListener("click",function(){
	index--
	showItems()
	check()
})
next.addEventListener("click",function(){
	index++
	showItems()
	check()
})

function check(){
    if(index == ctnNumberPagination.lastChild.textContent){
	    next.classList.add("disabled");
	}else{
  	    next.classList.remove("disabled");	
    }

    if(index == ctnNumberPagination.firstChild.textContent){
  	    prev.classList.add("disabled");
    }else{
  	    prev.classList.remove("disabled");	
    }
}
 
function showItems() {
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

function showNumberPagination(){
	for(let i=0; i<ctnNumberPagination.children.length ;i++){
		ctnNumberPagination.children[i].classList.remove("show")
		ctnNumberPagination.children[i].classList.add("hide")

		if(i>=(contBtn*maxBtn)-maxBtn && i<contBtn*maxBtn){
			ctnNumberPagination.children[i].classList.remove("hide")
			ctnNumberPagination.children[i].classList.add("show")
		}
	}
} 

function startBegin(){
	showItems()
	showNumberPagination()
	check()
} 
