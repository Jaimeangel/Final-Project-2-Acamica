pagination.addEventListener("click",(event)=>togglePagination(event))
/* const btnPagination = document.querySelector(".optionsMoreGifs .pagination div"); */

function togglePagination(e){
    const itemGetLS = getLocalStorage(nodes.main.key);
    const valueButton = Number(e.target.innerText);
    currentPage = valueButton;
    displayItems(createGiphyBox,itemGetLS,currentPage,itemLenght,nodes.main.node);
}

function displayItems(callback,items,page,itemsPorPage,nodo){
    const ArrayItems = [];
    page--;

    const start = itemsPorPage*page;
    const end = start + itemsPorPage;
    const ArrayItemsSlice = items?.slice(start,end)

    for(let i = 0; i < ArrayItemsSlice?.length; i++) {
        const item = ArrayItemsSlice[i]
        ArrayItems.push(item)
    }

    callback(nodo,ArrayItems);
}


function paginationCreater(nodo,length){
    console.log("Contando")
    nodo.innerHTML="";
    const pagContainer = document.createElement("div");
    const numberPage = length/itemLenght +1;

    for (let i= 1; i < numberPage; i++) {
        const btnPag = document.createElement("button")
        btnPag.textContent=`${i}`
        pagContainer.appendChild(btnPag)
    }

    nodo.appendChild(pagContainer)
    activeButton(pagContainer)
}

function activeButton(nodo){
    const botones = nodo.childNodes;
    botones.forEach( (item) =>{
        const value = Number(item.innerText)

        if(item.classList.contains("active")){
            console.log("si incluye")
            item.classList.remove("active")
        }


        if(value === currentPage){
            item.classList.add("active")
        } 
    })
}








