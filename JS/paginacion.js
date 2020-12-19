
const galleryItems = document.querySelector(".gifBox").children
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const maxItem = 12
let index = 1

const pagination = Math.ceil(galleryItems.length/maxItem)

function contarGif(){
	if(galleryItems.length > maxItem){
		console.log(galleryItems.length)
		console.log(galleryItems)
		startBegin()
	}else{
		console.log('No hay suficientes Gifos')
	}
}

prev.addEventListener("click",function(){
    index--
    check(); 
    showItems()
})
next.addEventListener("click",function(){
  	index++
  	check(); 
    showItems() 
})

function check(){
    if(index==pagination){
	    next.classList.add("disabled");
    }else{
  	    next.classList.remove("disabled");	
    }

    if(index==1){
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

function startBegin(){
	showItems()
  	check(); 
} 
