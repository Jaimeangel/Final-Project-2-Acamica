const conf_k_on = "wIqeb9EIG0bs8oh1pZCWhOdzZjI2BfIM"
const URL = "https://upload.giphy.com/v1/gifs"

let btnCam = document.getElementById("btnCam")

let introSlide = document.getElementById("introSlide")
let camSlide = document.getElementById("camSlide")
let camSlideText = document.getElementById("camSlideText")

let videoGum = document.getElementById("gum")

let btnOne = document.getElementById("btn_1")
let btnTwo = document.getElementById("btn_2")

let recorder


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

 /*  const constraints = {
    audio: false,
    video: {
      width: 460,
      height: 300
    }
  } 
  init(constraints)  */
  function getStreamAndDisplay() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          height: { max: 300 },
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

  let btnStyles = function changedStyles(){
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

  let btnStyles = function changedStyles(){
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

  const form = new FormData();
  form.append("file", recorder.getBlob(), "myGif.gif");

  btnCam.addEventListener("click",async (e)=>{
    e.preventDefault()
    if(btnCam.innerText===`SUBIR GIFO`){
      try{
        await fetch(`${URL}?api_key=${conf_k_on}`, { method: "POST", body: form });
        console.log('Gif subido con exito')
      }catch(error) {
        console.log("algo salio mal: ", error);
      } 
    }

  })
  
  });  

}


/* async function uploadGifApi(form){
  if(e.target.classList.contains("btnStart")){
    console.log('El gif se esta subiendo')
      try {
        await fetch(`${URL}?api_key=${conf_k_on}`, { method: "POST", body: form });
      }catch(error) {
        console.log("algo salio mal: ", error);
      } 
  }
}  */












/* async function init(constraints){
  try{
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
  }catch(e){
    console.error('No fue posible acceder a la camara', e);
  }
} */


/* function handleSuccess(stream) {
  
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

  console.log('Se muestra en pantalla el strem', stream)
  window.stream = stream

  const gumVideo = document.querySelector('video#gum')
  gumVideo.srcObject = stream
} */





/* function recordCam(e){
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
 */
/* function stopCam(e){
  stopRecording();

  let btnOldCam = btnCam.childNodes[1]
  console.log(btnOldCam)

  
  let btnNewCam = document.createElement("button")
  let btnNewCamText = document.createElement("p")
  btnNewCamText.innerText = `SUBIR GIFO`

  btnNewCam.appendChild(btnNewCamText)
  btnCam.replaceChild(btnNewCam,btnOldCam)

  console.log("para de grabar")
} */




/* function startRecording() {
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
} */


/* function stopRecording() {
  mediaRecorder.stop();
} */

/* function handleDataAvailable(event) {
  console.log('handleDataAvailable', event)
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data)
  }
} */