
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  if (KeyIsDown(R))
  {
   background("red");

  }
  

  if (keyIsDown(37)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(U)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(D)) 
  {
    background("green");
  }


  
  drawSprites();
}

