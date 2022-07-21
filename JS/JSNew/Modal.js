function BuildModal(data){

    
    const modal = document.createElement("div");
    modal.classList.add("modal")

    modal.addEventListener("click",(event)=>{
        const target = event.target.id;
        if(target === "buttonHeart"){
            const parent = event.target.parentElement;
            this.saveLocalStorage([data],"itemsFav")
            parent.classList.add("addFont")
        }else if(target === "closeModal"){
            modal.remove()
        }
    });
        
    modal.innerHTML = `
                <div class="modalBox">

                
                    <div id=${data.id} class="modalContent">
                    
                            <div class="buttonClose">
                                <button>
                                    <i id="closeModal" class="fas fa-times"></i>
                                </button>
                            </div>
                        
                            <div class="imgContent">
                                <img src=${data.img}>
                            </div>

                            <div class="references">

                                <div class="titles">
                                    <p>${data.title}</p>
                                    <p>${data.user}</p>
                                </div>


                                <div class="buttons" >
                                    <button>
                                        <i id="buttonHeart" class="fa-solid fa-heart"></i>
                                    </button>
                                </div>

                            </div>
                        
                        </div>

                </div>
    `;

    document.body.appendChild(modal)
};

function saveLocalStorage(data,key){
    const items = this.getLocalStorage(key)
    
    if(!items){
        localStorage.setItem(`${key}`,JSON.stringify([...data]))
    }else{
        const newData = [...items,...data]
        localStorage.setItem(`${key}`,JSON.stringify(newData))
    }
};