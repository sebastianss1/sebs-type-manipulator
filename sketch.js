function preload() {
 font = loadFont('assets/BemboStd.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Background Color Picker
  backgroundColorPick = createColorPicker('#FFFFFF');
  backgroundColorPick.position(30, 620);
  backgroundColorPick.style('width', '80px');

  //Text Color Picker
  particleColorPick = createColorPicker('#FED941');
  particleColorPick.position(30, 575);
  particleColorPick.style('width', '80px');

  //Selects input text from index.html
  inputText = select(".text-area");


}

function draw() {
  inputTextString = String(inputText.value());
  
  //Particle Text
  points = font.textToPoints(
    inputTextString, 0, 100, 200, {
      sampleFactor: 0.3,
      simplifyThreshold: 0
    });
  textSize(12);
  bounds = font.textBounds(
    inputTextString, 0, 0, 200);
  
  //
  backgroundColor = backgroundColorPick.value();
  background(backgroundColor);
  // textFont(font)

  fill(50,200,250);


  push();

  textAlign(CENTER);
  strokeWeight(0);

  pop();

  push();


  let centDistance = dist(mouseX , mouseY , width / 2, height / 2);

  let transparency = map(centDistance, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
  particleColor = particleColorPick.value();
	fill(particleColor);
  
  let particles = map(centDistance, 0, width, 0, 300);

  translate((width - abs(bounds.w)) / 2, 
            (height + abs(bounds.h)) / 2);

  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(p.x + particles * randomGaussian(), 
      p.y + particles * randomGaussian(), 10, 5);
  }
 

}



 




