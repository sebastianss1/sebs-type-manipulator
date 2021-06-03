var x = 50;
var speedX = 5;

var y = 50;
var speedY = 5;

var u;
var l;
var a;
var mods = [];
var xo;
var yo;
var count;

var col = {
    r: 0,
    g: 0,
    b: 0,
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(20);
  inputText = select(".text-area");

    u = 80;
  l = 0;
  var highCount = height/80;
  var wideCount = width/80;
  count = int(highCount * wideCount);
  
  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      mods[index++] = new Module(int(xc)*u,int(yc)*u);
    }
   }

       col.r= random(0,255);
    col.g= random(0,255);
    col.b= random(0,255);
}

function draw() {
  background(0);
    inputTextString = String(inputText.value());

  if (mouseIsPressed) {
    // col.r= random(0,255);
    // col.g= random(0,255);
    // col.b= random(0,255);
  background(col.r,col.g,col.b);
    stroke(255,163,163);
  } else {
    background(255);
    stroke(255);
  }
  
  //strokeWeight(15);
  noStroke();
  translate(20, 20);
  
  for (var i = 0; i <= count; i++) {
    mods[i].update();
    mods[i].draw1();
    mods[i].draw2();
  }

}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  

}

Module.prototype.update = function() {
    this.a = atan2(mouseY-this.y, mouseX-this.x);
}

Module.prototype.draw1 = function() {
  push();
  translate(this.x, this.y);
  fill('white');
  arc(0, -10, l, l, 0.5, PI-0.5);
  arc(0, 10, l, l, PI+0.5, -0.5);
  pop();
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rotate(this.a);

  //ellipse(0, 0, l, l);
  fill('#FF1493');
  text(inputTextString, x, y)
  
  
  //line(-l,0,l,0);
  pop();
  
}