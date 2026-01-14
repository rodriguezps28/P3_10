let pg1,pg2;
let img;

function setup() {
  let c = createCanvas(600, 600);
  c.parent("canvasWrapper");
  img=loadImage("img/flow_tool_design.png")
  pg1 = createGraphics(600, 600);
  pg2 = createGraphics(600, 600);
}

function draw() {
  //var c = pg2.get (mouseX,mouseY);
  var c;
  var dis= dist(mouseX,mouseY,pmouseX,pmouseY);
  var mdis= map(dis,20,190,20,190);
  var r=2;
  print(dis);
  pg2.background(img);
  //pg2.image(img,0,0);
  pg1.noStroke();
  //pg1.fill(c);
  /*if (mouseIsPressed === true){
    pg1.ellipse(mouseX,mouseY, mdis, mdis);
    }*/
   for(var x=0;x<width;x=x+20){
     for(var y=0;y<height;y=y+20){
      c = pg2.get (x,y);
      pg1.rect(x,y, 20, 20);
      pg1.fill(c);
    }
  }

  //image(pg2,0,0);
  image(pg1,0,0);
}
function saveIMG(){
  clear();
  image(pg1,0,0);
  save("circulo.png");
}
function keyPressed(){
  if (key === "s" || key === "S"){
    saveIMG();
  }
}
