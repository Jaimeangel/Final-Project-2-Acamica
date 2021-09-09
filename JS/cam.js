const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"
const URL = "https://upload.giphy.com/v1/gifs"

let btnCam = document.getElementById("btnCam")

let introSlide = document.getElementById("introSlide")
let camSlide = document.getElementById("camSlide")
let camSlideText = document.getElementById("camSlideText")
let overVideoDiv = document.getElementById("overVideo")
let overVideoImg = document.getElementById("imgVideoGum")
let overVideotext = document.getElementById("textContVideoGum")
let recordCamVideo = document.getElementById("recordCamSlide")

let videoGum = document.getElementById("gum")


let cronometreScreen = document.querySelector(".chronometer") 
let textRepeat = document.querySelector(".repeatCapt")

let btnOne = document.getElementById("btn_1")
let btnTwo = document.getElementById("btn_2")
let btnThree = document.getElementById("btn_3")

let recorder
let form
let infoGifUrl


btnCam.addEventListener("click",(e)=>{
  e.preventDefault()
  if(btnCam.innerText===`COMENZAR`){
    onCam()
  }else if(btnCam.innerText===`GRABAR`){
    recordCam()
  }else if(btnCam.innerText===`FINALIZAR`){
    stopCam()
  }else if(btnCam.innerText===`SUBIR GIFO`){
    uploadGifMethod()
}}) 


function onCam(){

  console.log("Camera Access")

  let btnStyles = function changedStyles(){
    //btn style
    btnOne.classList.add("hoverBtnCamAct")
    btnCam.style.display="none" 
    //display articles
    introSlide.style.display="none" 
    camSlide.style.display="flex" 
  }

  btnStyles()

 

function getStreamAndDisplay() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: 370,
          height: 290
        },
      })
      .then((stream) => {
        const gumVideo = document.querySelector('video#gum')
        gumVideo.srcObject = stream
        gumVideo.play();

        let btnStyles = function changedStyles(){
    
          //Style btn
          btnOne.classList.remove("hoverBtnCamAct")
          btnTwo.classList.add("hoverBtnCamAct")
          
          camSlideText.style.display="none"
          videoGum.style.display="flex"
          btnCam.style.display="block" 
          /* cronometreScreen.style.display="flex" */
      
          //Changed text btn
          let btnOldCam = btnCam.childNodes[1]
          console.log(btnOldCam)
          let btnNewCam = document.createElement("button")
          let btnNewCamText = document.createElement("p")
          btnNewCamText.innerText = `GRABAR`
      
          btnNewCam.appendChild(btnNewCamText)
          btnCam.replaceChild(btnNewCam,btnOldCam)  
        }
        btnStyles()

        recorder = RecordRTC(stream, {
          type: "gif",
          frameRate: 1,
          quality: 10,
          width: 360,
          height: 240,
          onGifRecordingStarted() {
            console.log('Grabando ahora mismo')
          },
        });
      });
  }
  getStreamAndDisplay()
}


function recordCam(){
  recorder.startRecording()
  start()

  let btnStyles = function changedStyles(){
    cronometreScreen.style.display="flex"
    let btnOldCam = btnCam.childNodes[1]
    console.log(btnOldCam)
    let btnNewCam = document.createElement("button")
    let btnNewCamText = document.createElement("p")
    btnNewCamText.innerText = `FINALIZAR`

    btnNewCam.appendChild(btnNewCamText)
    btnCam.replaceChild(btnNewCam,btnOldCam) 
  }
  btnStyles()
}

function stopCam(){
  reset()
  let btnStyles = function changedStyles(){
    cronometreScreen.style.display="none"
    textRepeat.style.display="flex"
    let btnOldCam = btnCam.childNodes[1]
    console.log(btnOldCam)
  
    let btnNewCam = document.createElement("button")
    let btnNewCamText = document.createElement("p")
    btnNewCamText.innerText = `SUBIR GIFO`
  
    btnNewCam.appendChild(btnNewCamText)
    btnCam.replaceChild(btnNewCam,btnOldCam)
  
    console.log("para de grabar")
  }
  btnStyles()

  recorder.stopRecording((recording) => {
  console.log("grabacion:", recording);

  form = new FormData();
  form.append("file", recorder.getBlob(), "myGif.gif");

  });  

}

function uploadGifMethod(){
  let btnStyles = function changedStyles(){
    btnCam.style.display="none" 
    btnTwo.classList.remove("hoverBtnCamAct")
    btnThree.classList.add("hoverBtnCamAct")
    overVideo.style.display="flex"
    textRepeat.style.display="none"
    }
    btnStyles()

    fetch(`${URL}?api_key=${conf_k_on}`, 
    { method: "POST", body: form })
    .then(function(res){
      if(res.status === 200){
        overVideoImg.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/check.svg")
        overVideotext.innerText="GIFO subido con éxito"
        console.log("El gif fue subido con exito")
        return res.json()
      }
    })
    .then(function(res){
      console.log(res)
      console.log(res.data.id)
      const dataId = res.data.id

      let btnStyles = function changedStyles(){

        let botonesUpload = document.createElement("div")
        botonesUpload.classList.add("boxliUp")

        let divDownLoad = document.createElement("div")
        divDownLoad.classList.add("boxliUp_btnDown")
        let botonDownLoad = document.createElement("button")
        let imgDownLoad = document.createElement("img")
        botonDownLoad.appendChild(imgDownLoad)
        imgDownLoad.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-download.svg")
        divDownLoad.setAttribute("data-id",`${res.data.id}`)
        divDownLoad.appendChild(botonDownLoad)
        botonesUpload.appendChild(divDownLoad)

        let divLink = document.createElement("div")
        divLink.classList.add("boxliUp_btnLink")

        let linkBoton = document.createElement("a")
        /* linkBoton.href=`${infoGifUrl.imgGifUrl}`  */

        
        let botonLink = document.createElement("button")
        let imgLink = document.createElement("img")
        botonLink.appendChild(imgLink)
        imgLink.setAttribute("src","GIFOS-UI-Desktop+Mobile 6/assets/icon-link.svg")
        linkBoton.appendChild(botonLink)
        divLink.appendChild(linkBoton)
        botonesUpload.appendChild(divLink)

        overVideoDiv.prepend(botonesUpload)

      }
      btnStyles()
      saveIdGifLS(dataId)

    })
    .catch((error) =>{
      console.log("El gif no fue cargado",error)
    })
}

function deleteRecorder(){

  let btnStyles = function changedStyles(){
    let btnOldCam = btnCam.childNodes[1]
    console.log(btnOldCam)
    let btnNewCam = document.createElement("button")
    let btnNewCamText = document.createElement("p")
    btnNewCamText.innerText = `GRABAR`

    btnNewCam.appendChild(btnNewCamText)
    btnCam.replaceChild(btnNewCam,btnOldCam) 

    textRepeat.style.display="none"
  }
  btnStyles()

  recorder.reset()
  form.delete("file")

}


function saveIdGifLS(dataId){
  let uploadGifId;
  //Toma valor de un arreglo con datos del LS
  uploadGifId = getIdGifLS()
  //Agregar el producto al carrito
  uploadGifId.push(dataId)
  //Agregamos al LS
  localStorage.setItem('uploadGifId', JSON.stringify(uploadGifId))
}


function getIdGifLS(){
  let GifUploadId;
  //Comprobar si hay algo en LS
  if(localStorage.getItem('uploadGifId') === null){
      GifUploadId = [];
  }
  else {
      GifUploadId = JSON.parse(localStorage.getItem('uploadGifId'));
  }
  return GifUploadId;
}