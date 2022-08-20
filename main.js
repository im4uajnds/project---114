function preload(){

}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
}
function take_snapshot(){
    save('MyFilter.png');
}
function modelLoaded(){
    console.log('PoseNet is Started');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex="+ results[0].pose.nose.x-40);
        console.log("nosey="+ results[0].pose.nose.y);
    }
}