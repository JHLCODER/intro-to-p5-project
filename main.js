function preload(){

}

function setup(){
    canvas = createCanvas(300 ,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 ,300)
    video.hide();

    createCanvas(700,550);
}

function draw(){
    image(video, 300,220,150,120);

    fill(0, 255, 0);
stroke(0, 255, 0);
rect(600,150,20,250);
  
fill(0, 255, 0);
stroke(0, 255, 0);
rect(150,150,20,250);
  
fill(0, 255, 0);
stroke(0, 255, 0);
rect(150,150,450,20);
  
fill(0, 255, 0);
stroke(0, 255, 0);
rect(150,400,450,20);
  
fill(255, 0, 0);
stroke(255, 0, 0);
ellipse(160, 160, 55, 55);
  
fill(255, 0, 0);
stroke(255, 0, 0);
ellipse(610, 160, 55, 55);

fill(255, 0, 0);
stroke(255, 0, 0);
ellipse(610, 410, 55, 55);
  
fill(255, 0, 0);
stroke(255, 0, 0);
ellipse(160, 410, 55, 55);
}

