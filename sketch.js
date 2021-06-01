function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(black);
  
  widthLever = createSlider(0, 100, 100);
  widthLever.position(30, 30);
  widthLever.style('width', '100px');
  
  lengthLever = createSlider(0, 100, 100);
  lengthLever.position(30,60);
  lengthLever.style('width', '100px')
  
  boldLever = createSlider(0, 100, 100);
  boldLever.position(30, 90);
  boldLever.style('width', '100px');
  
  backgroundColorPick = createColorPicker('#FFFFFF');backgroundColorPick.position(30, 120);backgroundColorPick.style('width', '80px');
  text("Pick a Background Color", 30 ,180);

  inputText = select("#textarea");
  
  
}

function draw() {

  backgroundColor = backgroundColorPick.value();
  background(backgroundColor);

  fill(50,200,250);
  noStroke();
  textSize(9);
  
  inputTextString = String(inputText.value());
  
  width = widthLever.value();
  length = lengthLever.value();
  boldness = boldLever.value();

  push();

  fill(125);
  textAlign(LEFT);


  textSize(12)
  text("TYPE: Stretch Wide " + width,25,146);
  text("TYPE: Stretch Long " + length,25,176);
  text("TYPE: Boldness " + boldness,25,206);

  pop();

  noFill();
  strokeWeight(boldness);


  push();
}


