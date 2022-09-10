class NoContent{
    constructor({
        type,
        img,
        message1,
        message2
    }){
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
                this.conditions(null,target) 
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
        this.conditions(nodoMessage)
    }

    conditions(nodo=null,target=null){
        if(this.type ==="main"){

            if(target != null){
                nodoMainGif.classList.toggle("toogleDisplayNone")
            }else{

                if(nodo != null){

                    if(nodoMainGiphyParent.style.display != "flex"){
                        nodoMainGiphyParent.classList.toggle("toogleDisplayFlex")
                    }
                    
                    nodoMainGif.classList.toggle("toogleDisplayNone")
                    nodoMainGiphyParent.insertBefore(nodo,nodoMainGif)
                }


            }


        }else if(this.type ==="favoritos"){
            
        }
    }
}