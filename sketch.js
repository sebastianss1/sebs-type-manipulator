
// let dancingWords = [];

// class DanceSpan {
//   constructor(element, x, y) {
//     element.position(x, y);
//     this.element = element;
//     this.x = x;
//     this.y = y;
//   }

//   brownian() {
//     this.x += random(-6, 6);
//     this.y += random(-6, 6);
//     this.element.position(this.x, this.y);
//   }
// }

function preload() {
 font = loadFont('assets/BemboStd.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //Stretches text wide
  widthLever = createSlider(0, 100, 1);
  widthLever.position(25, 40);
  widthLever.style('width', '100px');

  
  //Stretches text long  
  lengthLever = createSlider(0, 100, 1);
  lengthLever.position(25,85);
  lengthLever.style('width', '100px')
  
  //Toggles text weight 
  boldLever = createSlider(0, 100, 1);
  boldLever.position(25, 140);
  boldLever.style('width', '100px');
  
  //Toggles spacing between letters 
  letterSpacingLever = createSlider(-20,100,5); 
  letterSpacingLever.position(25,190); 
  letterSpacingLever.style('width','100px');

  sizeLever = createSlider(0, 100, 50);
  sizeLever.position(25, 240);
  sizeLever.style('width', '100px');
  
  //Background Color Picker
  backgroundColorPick = createColorPicker('#FFFFFF');
  backgroundColorPick.position(30, 300);
  backgroundColorPick.style('width', '80px');

  //Selects input text from index.html
  inputText = select(".text-area");
  debugger
  
  stretcherX = 1;
  stretcherY = 1;


  // This line grabs the paragraph just created, but it would
  // also grab any other elements with class 'text' in the HTML
  // page.
  // const texts = selectAll('#textarea');

  // for (let i = 0; i < texts.length; i++) {
  //   const paragraph = texts[i].html();
  //   const words = paragraph.split(' ');
  //   for (let j = 0; j < words.length; j++) {
  //     const spannedWord = createSpan(words[j]);
  //     const dw = new DanceSpan(spannedWord, random(500), random(100));
  //     dancingWords.push(dw);
  //   }
  // }
}

function draw() {

  backgroundColor = backgroundColorPick.value();
  background(backgroundColor);
  textFont(font)

  fill(50,200,250);
  noStroke();
  textSize(9);
  
  
  size = sizeLever.value();
  length = lengthLever.value();
  boldness = boldLever.value();
  letterSpacing = letterSpacingLever.value();
  
  inputTextString = String(inputText.value());
  textSize(size)
  // stroke()
  strokeWeight(boldness)
  // scale(mouseX / 100, mouseY / 100)
  // scale(size)
  text(inputTextString, 500, 300)
  xSpace = width + letterSpacing;
  ySpace = length + letterSpacing; 

  


  push();

  fill(125);
  textAlign(LEFT);

  textSize(12)
  text("Stretch Wide " + width,25,30);
  text("Stretch Long " + length,25,80);
  text("Boldness " + boldness,25,130);
  text("Letter Spacing " + letterSpacing,25, 180);
  text("Text Size " + size,25,230);
  text("Pick a Background Color", 25, 290);


  stroke(125);
  strokeWeight(1);
  // line(10,130,130,130);
  // line(10,230,130,230);
  // line(150,240,220,240);

  pop();

  noFill();
  strokeWeight(boldness);

  push();

  runLength = inputTextString.length;

  for(var i=0;i<runLength;i++){
      letter_select = i;
    }

    if(runLength>=1){
      translate(-1*xSpace/2,-floor(runLength/1)*ySpace/2);
    } else {
      translate(-runLength*xSpace/2,-floor(runLength/1)*ySpace/2);
    }

    translate(-(width+stretcherX)/2,-(length+stretcherY)/2);

    // textEngine();
    pop();

}


