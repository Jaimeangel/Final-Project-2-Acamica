const pagination = document.querySelector(".optionsMoreGifs .pagination");

async function getGiphy(value){
    const fetch = await fetchApi(linkGet,key,boundSearch,value,limit,offSetLink);
    giphyData(fetch)
}

function titleValueGiphy(value,nodo){
    nodo.innerHTML=""
    nodo.innerHTML=`${value.toUpperCase()}`
}

function giphyData(data){
    const dataArray = [];

    data.forEach( item => {
        const gif = {
            img :item.images.original.url,
            title :item.title,
            user :item.username,
            id :item.id
        }
        dataArray.push(gif)
    });

    saveLocalStorage(dataArray,nodes.main.key)
    createGiphyBox(nodes.main.node,dataArray)
}

function createGiphyBox(nodo,data){
    nodo.innerHTML="";
    const dataArray = data;
    const itemArray = [];

    dataArray.forEach( item => {
        const div = document.createElement("div")
        div.classList.add("giphyBox")
        div.style.backgroundImage=`url(${item.img})`
        div.setAttribute("id",`${item.id}`)
    
        div.innerHTML = `
            <div class="buttons" >
                <button>
                    <i class="fa-regular fa-heart"></i>
                </button>
    
                <button>
                    <i class="fa-solid fa-expand"></i>
                </button>
            </div>
    
    
            <div class="titles">
                <p>${item.title}</p>
                <p>${item.user}</p>
            </div>
        ` 
        itemArray.push(div)
    }); 

    nodo.append(...itemArray);
    const itemGetLSLenght = getLocalStorage(nodes.main.key)?.length;
    paginationCreater(pagination,itemGetLSLenght);

}


function saveLocalStorage(data,key){
    const items = getLocalStorage(key)
    
    if(!items){
        localStorage.setItem(`${key}`,JSON.stringify([...data]))
    }else{
        const newData = [...items,...data]
        localStorage.setItem(`${key}`,JSON.stringify(newData))
    }
}


function getLocalStorage(key){
    const items = JSON.parse(localStorage.getItem(`${key}`))
    return items;
}

function deleteLocalStorage(key){
    localStorage.removeItem(key)
}