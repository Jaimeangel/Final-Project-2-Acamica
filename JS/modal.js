function buildingModal(imgGifUrl,userGif,nameGif,idGif){
    //Creando modal 
    
    //Parent Content
    let ctnModal = document.createElement("div")
    ctnModal.classList.add("ctnModal")
    ctnModal.style.display="block"
    
    //Child Conten
    let contentModal = document.createElement("div")
    contentModal.classList.add("contentModal")
    ctnModal.appendChild(contentModal)
    
    //Btn close modal
    let spanElement = document.createElement("span")
    spanElement.setAttribute("id","btnClose")
    let btnSpan = document.createElement("button")
    spanElement.appendChild(btnSpan)
    let iconX = document.createElement("i")
    iconX.setAttribute("class","fas fa-times")
    btnSpan.appendChild(iconX)
    spanElement.appendChild(btnSpan)
    contentModal.appendChild(spanElement)

    //Evento close
    spanElement.addEventListener("click",() =>{
        ctnModal.style.display="none"
    })
    
    //Img Gif
    let ctnGifMax = document.createElement("div")
    ctnGifMax.classList.add("imgGif")
    ctnGifMax.style.backgroundImage = `url(${imgGifUrl})`
    contentModal.appendChild(ctnGifMax)
    
    //Reference autor/buttons
    
    //Content autor/buttons
    let refAutorBtn = document.createElement("div")
    refAutorBtn.classList.add("refAutorBtn")
    contentModal.appendChild(refAutorBtn)
    
    //autor
    let autorCtnMax = document.createElement("div")
    autorCtnMax.classList.add("autor")

    let userData = document.createElement("div")
    userData.textContent = `${userGif}`
    userData.classList.add("userData")
    let nameData = document.createElement("div")
    nameData.textContent=`${nameGif}`
    nameData.classList.add("nameData")    

    autorCtnMax.appendChild(userData)
    autorCtnMax.appendChild(nameData)
    refAutorBtn.appendChild(autorCtnMax)
    
    //Buttons Content
    let btnCtnMax = document.createElement("div")
    btnCtnMax.classList.add("btn")
    refAutorBtn.appendChild(btnCtnMax)
    
    //Heart Button
    let btnHeartBotone= document.createElement("div")
    btnHeartBotone.classList.add("btnHeartBotone")
    let btnHeartModal = document.createElement("button")
    imgBtnHeartModal= document.createElement("img")

    imgBtnHeartModal.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
    btnHeartModal.setAttribute("data-id",`${idGif}`)

    btnHeartModal.appendChild(imgBtnHeartModal)
    btnHeartBotone.appendChild(btnHeartModal)
    btnCtnMax.appendChild(btnHeartBotone)
    
    //Down Button 
    let btnDownBotone= document.createElement("div")
    btnDownBotone.classList.add("btnDownBotone")
    let btnDownModal = document.createElement("button")
    imgBtnDownModal= document.createElement("img")

    imgBtnDownModal.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-fav-hover.svg")
    btnDownModal.setAttribute("data-id",`${idGif}`)

    btnDownModal.appendChild(imgBtnDownModal)
    btnDownBotone.appendChild(btnDownModal)
    btnCtnMax.appendChild(btnDownBotone)
    
    //Agregando modal content gif
    ctnGyphy.appendChild(ctnModal) 

} 
