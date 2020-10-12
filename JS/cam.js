let btnCam = document.getElementById("btnCam")

let introSlide = document.getElementById("introSlide")
let camSlide = document.getElementById("camSlide")
let camSlideText = document.getElementById("camSlideText")

let videoGum = document.getElementById("gum")

let btnOne = document.getElementById("btn_1")
let btnTwo = document.getElementById("btn_2")

let mediaRecorder
let recordedBlobs


btnCam.addEventListener("click",(e)=>{
  e.preventDefault()
  if(btnCam.innerText===`COMENZAR`){
    onCam()
  }else if(btnCam.innerText===`GRABAR`){
    recordCam()
  }else if(btnCam.innerText===`FINALIZAR`){
    stopCam()
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

  const constraints = {
    audio: false,
    video: {
      width: 460,
      height: 300
    }
  } 
  init(constraints) 
}


async function init(constraints){
  try{
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  }catch(e){
    console.error('navigator.getUserMedia error:', e);
  }
}


function handleSuccess(stream) {
  
  let btnStyles = function changedStyles(){
    
    //Style btn
    btnOne.classList.remove("hoverBtnCamAct")
    btnTwo.classList.add("hoverBtnCamAct")
    
    camSlideText.style.display="none"
    videoGum.style.display="flex"
    btnCam.style.display="block" 

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

  console.log('getUserMedia() got stream:', stream)
  window.stream = stream

  const gumVideo = document.querySelector('video#gum')
  gumVideo.srcObject = stream
}


function recordCam(e){
  startRecording()

  let btnOldCam = btnCam.childNodes[1]
  console.log(btnOldCam)
  let btnNewCam = document.createElement("button")
  let btnNewCamText = document.createElement("p")
  btnNewCamText.innerText = `FINALIZAR`

  btnNewCam.appendChild(btnNewCamText)
  btnCam.replaceChild(btnNewCam,btnOldCam)  

  console.log("Empieza grabando")
}

function stopCam(e){
  stopRecording();

  let btnOldCam = btnCam.childNodes[1]
  console.log(btnOldCam)

  
  let btnNewCam = document.createElement("button")
  let btnNewCamText = document.createElement("p")
  btnNewCamText.innerText = `SUBIR GIFO`

  btnNewCam.appendChild(btnNewCamText)
  btnCam.replaceChild(btnNewCam,btnOldCam)

  console.log("para de grabar")
}




function startRecording() {
  recordedBlobs = []
  let options = {mimeType: 'video/webm;codecs=vp9,opus'}

  try {
    mediaRecorder = new MediaRecorder(window.stream, options)
  } catch (e) {
    console.error('Exception while creating MediaRecorder:', e)
    errorMsgElement.innerHTML = `Exception while creating MediaRecorder: ${JSON.stringify(e)}`
    return;
  }

  mediaRecorder.ondataavailable = handleDataAvailable
  mediaRecorder.start()
}


function stopRecording() {
  mediaRecorder.stop();
}

function handleDataAvailable(event) {
  console.log('handleDataAvailable', event)
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data)
  }
}