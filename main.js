noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(600, 900);
    video.position(100, 100)

    canvas = createCanvas(500, 430);
    canvas.position(840, 340)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized!')
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

function draw() {
    document.getElementById("hean").innerHTML = "Size of the text will be :- " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text("New Era Global School",noseX,noseY);
}
