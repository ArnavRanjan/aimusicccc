song="";
leftWristX = 0;
rightWrist = 0;
rightWristX = 0;
rightWristY = 0;


function preload()
{
    song = loadSound("gandagana-remix-song.mp3")
    song = loadSound("Dhoom Tara Bell Bottom 128kbps.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0 ,0 ,600,500);
    fill("red");
    stroke("black");
    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX,leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_deciamls = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        document.getElementById("volume").innerHTML = "Volume" + volume;
        song.setVolume(volume);
    }
    }

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function Song_name()
{
    song.play("gandagana-remix-song.mp3");
    song.play("Dhoom Tara Bell Bottom 128kbps.mp3");
}