var cat, catImage1,catImage2;
var mouse, mouseImage1,mouseImage2;
var bg,bgImg;
var mouse3Img;
var cat4Img;
function preload() {
    //load the images here
  catImage=loadAnimation("cat1.png","cat2.png");
  
  mouseImage=loadAnimation("mouse1.png","mouse2.png");
  
  bgImg=loadImage("garden.png");
  mouse3Img=loadAnimation("mouse3.png");
  cat4Img=loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,20,20);
    cat.addAnimation("running",catImage);
    cat.addAnimation("stood",cat4Img);
    cat.scale=0.2;
    //cat.debug=true;
    cat.setCollider("rectangle",500,10,50,50,30);

    mouse=createSprite(200,500,20,20);
    mouse.addAnimation("running",mouseImage);
    mouse.addAnimation("stood",mouse3Img);
    mouse.scale=0.2;
    
    bg=createSprite(1000,800,1000,800);
    bg.addImage(bgImg);
    bg.scale=0.2;
}

function draw() {
    background(bgImg);
    edges=createEdgeSprites();
    cat.collide(edges);
    mouse.collide(edges);
    //Write condition here to evalute if tom and jerry collide
    if(cat.collide(mouse)){
        mouse.changeAnimation("stood",mouse3Img);
        cat.changeAnimation("stood",cat4Img);
        textSize(40);
        text("Tom caught Jerry",150,400);
        fill(0,102,153,51);
        cat.velocityX=0;
        mouse.velocityX=0;
    }
    drawSprites();
    keyPressed();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("LEFT_ARROW")){
        cat.velocityX=-4;
        
    
    }
    if(keyDown("RIGHT_ARROW")){
        cat.velocityX=4;
    }
}
