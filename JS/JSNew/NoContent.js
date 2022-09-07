class NoContent{
    constructor({
        type,
        nodo,
        img,
        message1,
        message2=undefined
    }){
        this.nodo=nodo;
        this.img=img;
        this.message1=message1;
        this.message2=message2;
        this.type=type;
    }

    publicMessage(){
        const nodoMessage = document.createElement("div");
        nodoMessage.classList.add("parentNoContent")

        nodoMessage.addEventListener("click",(event)=>{
            const target = event.target.id;
            if(target === `closeMessage${this.type}`){
                nodoMessage.remove()
            }
        })

        nodoMessage.innerHTML=`
            <div class="noContent">
                <div>
                    <img src=${this.img}>
                </div>

                <div class="message">
                    <p>${this.message1}</p>
                    <p>${this.message2}</p>
                </div>

                <div>
                    <button><i id="closeMessage${this.type}" class="fas fa-times"></i></button>
                </div>
                
            </div>
        `
        this.nodo.appendChild(nodoMessage);
    }
}