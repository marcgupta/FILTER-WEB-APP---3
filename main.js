NoseX="";
NoseY="";
function preload() {

    moustache=loadImage("https://i.postimg.cc/fRBP9HDs/moustache-PNG38.png");

}

function setup() {

canvas=createCanvas(400,400);
canvas.center();

video = createCapture(VIDEO);
video.size(400,400);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}

function modelLoaded() {

console.log("DONE 👍")

}

function gotPoses(results) {

if(results.length > 0) {

console.log(results);
console.log("nose x=" + results[0].pose.nose.x);
console.log("nose y=" + results[0].pose.nose.y);
NoseX = results[0].pose.nose.x + 50;
NoseY = results[0].pose.nose.y + 125; 

}

}

function draw() {

image(video,70,125,400,400);
image(moustache,NoseX,NoseY,45,45);

}

function take_snapshot() {

    save("myFilterImage.png");

}