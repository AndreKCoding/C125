diference = 0;
pulsoXL = 0;
pulsoXR = 0;

function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 300);
    canvas.position(700, 200);

    video = createCapture(VIDEO);
    video.size(500, 300);
    video.position(200, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Modelo foi Carregado");
}

function draw()
{
    background('white');
    fill('black');
    text('Andre', 200, 150);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        pulsoXL = results[0].pose.leftWrist.x;
        pulsoXR = results[0].pose.rightWrist.x;

        diference = Math.floor(pulsoXL - pulsoXR - 100);
        console.log("pulsoXL = " + pulsoXL + ", pulsoXR = " + pulsoXR);
        textSize(diference);

        console.log(diference);
    }
}