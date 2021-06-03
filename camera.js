let cam;
let step = 7;
let size;

let maxB = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //canvas.parent("sketch");
  cam = createCapture(VIDEO);
  cam.hide();

  pixelDensity(10);
  noStroke();

  size = int(width / (cam.width / step)) / 1.4;

  inputText = select(".text-area");



}

function draw() {
    inputTextString = String(inputText.value());

  background('white');

  cam.loadPixels();

  maxB = 0;

  if (cam.pixels.length > 0) {
    for (let y = 0; y < cam.height; y += step) {
      for (let x = 0; x < cam.width; x += step) {
        let i = (y * cam.width + x + 10) * 4;

        let r = cam.pixels[i];
        let g = cam.pixels[i];
        let b = cam.pixels[i];

        let pColor = color(r, g, b);
        let pBright = brightness(pColor);

        if (pBright > maxB) {
          maxB = pBright;
        }

        let bright = int(map(pBright, 20, 100, 0, 3));

        let txt = "";
        textStyle(NORMAL);
        switch (bright) {
          case 0:
            txt = inputTextString;
            // textStyle(ITALIC);


        }

        let xpos = map(x, 20, cam.width, 50, width);
        let ypos = map(y, 50, cam.height, 50, height);

        fill('#00008b');
        textSize(size - 5);
        text(txt, xpos, ypos + size);
      }
    }
  }
}