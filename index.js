let graphics, font, tileSize
let rgba = ['rgba(255, 26, 150, 0.9)', 'rgba(100, 255, 200, 0.9)', 'rgba(50, 100, 255, 0.9)']
let textSize = 100
let tiles = 50

function preload() {
  font = loadFont('assets/BemboStd.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)

    inputText = select(".text-area");

}


function draw() {
    background('white')
    inputTextString = String(inputText.value());
    
    
    graphics = createGraphics(width, height)
    graphics.textFont(font)
    graphics.textAlign(CENTER, CENTER)
    graphics.blendMode(SCREEN)
    graphics.translate(width / 2, height / 2)
    graphics.textSize(textSize)
    graphics.fill(rgba[0])
    graphics.text(inputTextString,2, 2)
    graphics.fill(rgba[1])
    graphics.text(inputTextString, 0, 0)
    graphics.fill(rgba[2])
    graphics.text(inputTextString, -2, -2)
    graphics.fill(rgba[1])
    graphics.text(inputTextString, 5, 5)
    
    tileSize = width / tiles
    
    // Throttle frame rate for performance
    frameRate(60)
  
    for (let x = 0; x < tiles; x++) {
  for (let y = 0; y < tiles; y++) {
    
      let wave1 = floor(tan((frameCount / (((tiles / y * 10) * 0.5) * (tiles - x))) * 0.5) * 100)
      let wave2 = floor(sin((frameCount + (((tiles - y) * 0.025) * x)) * 0.06) * 100)
      
      const sx = x * tileSize + wave2 
      const sy = y * tileSize  + wave2 
      const sw = tileSize - 10
      const sh = tileSize - 10
      
      const dx = x * tileSize + wave1
      const dy = y * tileSize + wave1
      const dw = tileSize 
      const dh = tileSize 
      
      image(graphics, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}