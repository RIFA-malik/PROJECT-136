Status="";
input_text="";

function setup() {
    canvas = createCanvas(300,290);
    canvas.position(480,250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS"
    input_text= document.getElementById("input_id").value;
}
function modelLoadedLoad() {
   console.log("model_loaded");
   Status = true;
}
function draw() {
    image(video,0,0,300,290);
}



