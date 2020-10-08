let btnCam = document.getElementById("btnCam")

let introSlide = document.getElementById("introSlide")
let camSlide = document.getElementById("camSlide")

let videoGum = document.getElementById("gum")

let btnOne = document.getElementById("btn_1")
let btnTwo = document.getElementById("btn_2")

let mediaRecorder
let recordedBlobs

btnCam.addEventListener("click",onCam)  //{}





function onCam(){

  console.log("Camera Access")
  let tryBtn = btnCam.childNodes[1]
  console.log(tryBtn)

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
  videoGum.style.display="flex"

  let btnStyles = function changedStyles(){
    //Style btn
    btnOne.classList.remove("hoverBtnCamAct")
    btnTwo.classList.add("hoverBtnCamAct")

    btnCam.style.display="block" 
    camSlide.style.display="none"

    //Changed text btn
    let buttonCam = btnCam.childNodes[1]
    let buttonChangedCam = document.createElement("button")
    buttonChangedCam.innerText = `GRABAR`
    btnCam.replaceChild(buttonChangedCam,buttonCam)

    buttonChangedCam.addEventListener("click",recordCam)
  }
  btnStyles()

  console.log('getUserMedia() got stream:', stream)
  window.stream = stream

  const gumVideo = document.querySelector('video#gum')
  gumVideo.srcObject = stream
}


function recordCam(e){
  if(buttonChangedCam.innerText ===`GRABAR`){
    startRecording()
    buttonChangedCam.innerText ===`FINALIZAR`
  }else{
    stopRecording();
    buttonChangedCam.innerText ===`SUBIR GIFO`
  }
}