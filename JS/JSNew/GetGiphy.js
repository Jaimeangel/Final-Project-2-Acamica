const giphyGrid = document.querySelector(".gyphy")

async function getGiphy(value){
    const fetch = await fetchApi(linkGet,key,boundSearch,value,limit,offSetLink);
    giphyData(fetch)
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

    createGiphyBox(dataArray);
}

function createGiphyBox(data){
    const dataArray = [...data];
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

    giphyGrid.append(...itemArray);

}

getGiphy("shakira")