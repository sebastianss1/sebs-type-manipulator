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
textColorPick = createColorPicker('#66CAFF');
textColorPick.position(30, 575);
textColorPick.style('width', '80px');

  //Selects input text from index.html
  inputText = select(".text-area");





}

function draw() {
    inputTextString = String(inputText.value());
    
    points = font.textToPoints(inputTextString, 18, -1, 5, {
      sampleFactor: 3,
      simplifyThreshold: 0
    });
    bounds = font.textBounds(inputTextString), 0, 0, 20;

  
  backgroundColor = backgroundColorPick.value();
  background(backgroundColor);

  textColor = textColorPick.value();
  fill(textColor);
  textAlign(LEFT)

  // 
  beginShape();
  translate(-bounds.x / width * bounds.w, -bounds.y * height / bounds.h);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    vertex(
      p.x * width / bounds.w +
        sin(4 * p.y  / bounds.h / 2 + millis() / 800) * 1.2 * width * 2 / 10,
      p.y * height / bounds.h
    );
  }
  endShape(CLOSE);

}





 




