function textEngine() {
//  if (letter_select >= inpText.length) {
//      letter_space( stretcherX,  stretcherY, stretcherShear);
//  } else {

  var stretcherX = 1;
  var stretcherY = 1;

     c1 = inputTextString.charAt(letter_select);            

    if (c1 == 'A') {
      letter_A( stretcherX,  stretcherY);
    } else if (c1 == 'a') {
      letter_a( stretcherX,  stretcherY);
    } else if (c1 == 'B') {
      letter_B( stretcherX,  stretcherY);
    } else if (c1 == 'b') {
      letter_b( stretcherX,  stretcherY);
    } else if (c1 == 'C') {
      letter_C( stretcherX,  stretcherY);
    } else if (c1 == 'c') {
      letter_c( stretcherX,  stretcherY);
    } else if (c1 == 'D') {
      letter_D( stretcherX,  stretcherY);
    } else if (c1 == 'd') {
      letter_d( stretcherX,  stretcherY);
    } else if (c1 == 'E') {
      letter_E( stretcherX,  stretcherY);
    } else if (c1 == 'e') {
      letter_e( stretcherX,  stretcherY);
    } else if (c1 == 'F') {
      letter_F( stretcherX,  stretcherY);
    } else if (c1 == 'f') {
      letter_f( stretcherX,  stretcherY);
    } else if (c1 == 'G') {
      letter_G( stretcherX,  stretcherY);
    } else if (c1 == 'g') {
      letter_g( stretcherX,  stretcherY);
    } else if (c1 == 'H') {
      letter_H( stretcherX,  stretcherY);
    } else if (c1 == 'h') {
      letter_h( stretcherX,  stretcherY);
    } else if (c1 == 'I') {
      letter_I( stretcherX,  stretcherY);
    } else if (c1 == 'i') {
      letter_i( stretcherX,  stretcherY);
    } else if (c1 == 'J') {
      letter_J( stretcherX,  stretcherY);
    } else if (c1 == 'j') {
      letter_j( stretcherX,  stretcherY);
    } else if (c1 == 'K') {
      letter_K( stretcherX,  stretcherY);
    } else if (c1 == 'k') {
      letter_k( stretcherX,  stretcherY);
    } else if (c1 == 'L') {
      letter_L( stretcherX,  stretcherY);
    } else if (c1 == 'l') {
      letter_l( stretcherX,  stretcherY);
    } else if (c1 == 'M') {
      letter_M( stretcherX,  stretcherY);
    } else if (c1 == 'm') {
      letter_m( stretcherX,  stretcherY);
    } else if (c1 == 'N') {
      letter_N( stretcherX,  stretcherY);
    } else if (c1 == 'n') {
      letter_n( stretcherX,  stretcherY);
    } else if (c1 == 'O') {
      letter_O( stretcherX,  stretcherY);
    } else if (c1 == 'o') {
      letter_o( stretcherX,  stretcherY);
    } else if (c1 == 'P') {
      letter_P( stretcherX,  stretcherY);
    } else if (c1 == 'p') {
      letter_p( stretcherX,  stretcherY);
    } else if (c1 == 'Q') {
      letter_Q( stretcherX,  stretcherY);
    } else if (c1 == 'q') {
      letter_q( stretcherX,  stretcherY);
    } else if (c1 == 'R') {
      letter_R( stretcherX,  stretcherY);
    } else if (c1 == 'r') {
      letter_r( stretcherX,  stretcherY);
    } else if (c1 == 'S') {
      letter_S( stretcherX,  stretcherY);
    } else if (c1 == 's') {
      letter_s( stretcherX,  stretcherY);
    } else if (c1 == 'T') {
      letter_T( stretcherX,  stretcherY);
    } else if (c1 == 't') {
      letter_t( stretcherX,  stretcherY);
    } else if (c1 == 'U') {
      letter_U( stretcherX,  stretcherY);
    } else if (c1 == 'u') {
      letter_u( stretcherX,  stretcherY);
    } else if (c1 == 'V') {
      letter_V( stretcherX,  stretcherY);
    } else if (c1 == 'v') {
      letter_v( stretcherX,  stretcherY);
    } else if (c1 == 'W') {
      letter_W( stretcherX,  stretcherY);
    } else if (c1 == 'w') {
      letter_w( stretcherX,  stretcherY);
    } else if (c1 == 'X') {
      letter_X( stretcherX,  stretcherY);
    } else if (c1 == 'x') {
      letter_x( stretcherX,  stretcherY);
    } else if (c1 == 'Y') {
      letter_Y( stretcherX,  stretcherY);
    } else if (c1 == 'y') {
      letter_y( stretcherX,  stretcherY);
    } else if (c1 == 'Z') {
      letter_Z( stretcherX,  stretcherY);
    } else if (c1 == 'z') {
      letter_z( stretcherX,  stretcherY);
    } else if (c1 == '_') {
      letter_underscore( stretcherX,  stretcherY);
    } else if (c1 == '-') {
      letter_dash( stretcherX,  stretcherY);
    } else if (c1 == '?') {
      letter_question( stretcherX,  stretcherY);
    } else if (c1 == '.') {
      letter_period( stretcherX,  stretcherY);
    } else if (c1 == '!') {
      letter_exclaim( stretcherX,  stretcherY);
    } else if (c1 == ' ') {
      letter_space( stretcherX,  stretcherY);
    } else if (c1 == ':') {
      letter_colon( stretcherX,  stretcherY);
    } else if (c1 == ';') {
      letter_semicolon( stretcherX,  stretcherY);
    } else if (c1 == ',') {
      letter_comma( stretcherX,  stretcherY);
    } else if (c1 == '/') {
      letter_slash( stretcherX,  stretcherY);
    } else if (c1 == '&') {
      letter_amp( stretcherX,  stretcherY);
    } else if (c1 == '1') {
      one( stretcherX,  stretcherY);
    } else if (c1 == '2') {
      two( stretcherX,  stretcherY);
    } else if (c1 == '3') {
      three( stretcherX,  stretcherY);
    } else if (c1 == '4') {
      four( stretcherX,  stretcherY);
    } else if (c1 == '5') {
      five( stretcherX,  stretcherY);
    } else if (c1 == '6') {
      six( stretcherX,  stretcherY);
    } else if (c1 == '7') {
      seven( stretcherX,  stretcherY);
    } else if (c1 == '8') {
      eight( stretcherX,  stretcherY);
    } else if (c1 == '9') {
      nine( stretcherX,  stretcherY);
    } else if (c1 == '0') {
      zero(stretcherX,  stretcherY);
    }
//  }
}
///////////////////////////////////////////////// LETTERS

function letter_A ( strX,  strY) {
  push();
   
  beginShape();
  vertex(0, length+strY);
  vertex(width/2+strX/2, 0);
  vertex(width+strX, length+strY);
  endShape();

   ang = atan((width/2+strX/2)/(length+strY));
   angX = tan(ang)*(length/3);

  line(angX, 2*length/3+strY, width+strX-angX, 2*length/3+strY);
  pop();
}

function letter_a ( strX,  strY) {
  push();
   
 
  beginShape();
  vertex(width+strX, length+strY);
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  endShape();
  
  beginShape();
  vertex(width+strX, 3*length/4+strY);
  vertex(width+strX, 3*length/4);
  bezierVertex(width+strX, 3*length/4,  width+strX, length/2,  width/2+strX, length/2);
  vertex(width/2, length/2);
  bezierVertex(0,length/2,  0,3*length/4,  0,3*length/4);
  vertex(0,3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  vertex(width+strX, length/2);
  endShape();
  
  pop();
}

function letter_B ( strX,  strY) {
  push();
   
   
  beginShape();
  vertex(0, length+strY);
  vertex(0, 0);
  vertex(width/2+strX, 0);
  bezierVertex(width/2+strX, 0, width+strX, 0, width+strX, length/4);
  vertex(width+strX, length/4+strY/2);
  bezierVertex(width+strX, length/2+strY/2, width/2+strX/2, length/2+strY/2, width/2+strX/2, length/2+strY/2);
  vertex(0, length/2+strY/2);
  endShape();

  //repeat top hump
  push();
  translate(0, length/2+strY/2);
  beginShape();
  vertex(0, 0);
  vertex(width/2+strX, 0);
  bezierVertex(width/2+strX, 0, width+strX, 0, width+strX, length/4);
  vertex(width+strX, length/4+strY/2);
  bezierVertex(width+strX, length/2+strY/2, width/2+strX/2, length/2+strY/2, width/2+strX/2, length/2+strY/2);
  vertex(0, length/2+strY/2);
  endShape();
  pop();
  pop();
}

function letter_b ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  vertex(width+strX, length/2);
  endShape();
  
  line(0,0,  0,length+strY);
  pop();
}

function letter_C ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, length/3);
  bezierVertex(width+strX, length/3, width+strX, 0, width/2+strX, 0);
  vertex(width/2, 0);
  bezierVertex(0, 0, 0, length/3, 0, length/3);
  vertex(0, 2*length/3+strY);
  bezierVertex(0, 2*length/3+strY, 0, length+strY, width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY, width+strX, 2*length/3+strY, width+strX, 2*length/3+strY);
  endShape();
  pop();
}

function letter_c ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  endShape();
  
  pop();
}

function letter_D ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, length/3);
  bezierVertex(width+strX,length/3,  width+strX,0,  width/2+strX,0);
  vertex(0, 0);
  vertex(0, length+strY);
  vertex(width/2,length+strY);
  vertex(width/2+strX,length+strY);
  bezierVertex(width+strX,length+strY,  width+strX,2*length/3+strY,   width+strX,2*length/3+strY);
  vertex(width+strX, length/3);
  endShape();
  pop();
}

function letter_d ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  vertex(width+strX, length/2);
  endShape();
  
  line(width+strX,0,  width+strX,length+strY);
  pop();
}

function letter_E ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, 0);
  vertex(0, 0);
  vertex(0, length+strY);
  vertex(width+strX, length+strY);
  endShape();

  line(0, length/2+strY/2, 2*width/3+strX, length/2+strY/2);
  pop();
}

function letter_e ( strX,  strY) {
  push();
   
    
  
  beginShape();
  
  vertex(0,5*length/8+strY/2);
  vertex(width+strX, 5*length/8+strY/2);
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  endShape();
  
  pop();
}

function letter_F ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, 0);
  vertex(0, 0);
  vertex(0, length+strY);
  endShape();

  line(0, length/2+strY/2, 2*width/3+strX, length/2+strY/2);
  pop();
}

function letter_f ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width/2+strX/2,length+strY);
  vertex(width/2+strX/2,length/4);
  bezierVertex(width/2+strX/2,length/4,  width/2+strX/2,0,  width+strX/2,0);
  vertex(width+strX,0);
  endShape();
  
  line(0, length/2+strY/2, width+strX, length/2+strY/2);
  line(0, length+strY, width+strX, length+strY);
  pop();
}

function letter_G ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, length/3);
  bezierVertex(width+strX, length/3, width+strX, 0, width/2+strX, 0);
  vertex(width/2, 0);
  bezierVertex(0, 0, 0, length/3, 0, length/3);
  vertex(0, 2*length/3+strY);
  bezierVertex(0, 2*length/3+strY, 0, length+strY, width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY, width+strX, 2*length/3+strY, width+strX, 2*length/3+strY);
  endShape();

  beginShape();
  vertex(width/2+strX/2, length/2+strY/2);
  vertex(width+strX, length/2+strY/2);
  vertex(width+strX, length+strY);
  endShape();
  pop();
}

function letter_g ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, length/2+strY);
  bezierVertex(0, length/2+strY,  0, 3*length/4+strY,  width/2, 3*length/4+strY);
  vertex(width/2+strX, 3*length/4+strY);
  bezierVertex(width+strX, 3*length/4+strY,  width+strX, length/2+strY,  width+strX, length/2+strY);
  vertex(width+strX, length/2);
  endShape();
  
  beginShape();
  vertex(width/2+strX/2,3*length/4+strY);
  vertex(width+strX,length+strY);
  bezierVertex(width+strX,length+strY,  width+strX,5*length/4+strY,  width/2+strX, 5*length/4+strY);
  vertex(width/2,5*length/4+strY);
  bezierVertex(0,5*length/4+strY,  0,length+strY,  0,length+strY);
  endShape();
  
  line(width/2+strX/2,length/4,  width+strX,length/4);
  
  pop();
}

function letter_H ( strX,  strY) {
  push();
   
    
  line(0, 0, 0, length+strY);
  line(0, length/2+strY/2, width+strX, length/2+strY/2);
  line(width+strX, 0, width+strX, length+strY);
  pop();
}

function letter_h ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length+strY);
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0,length+strY);
  endShape();
  
  line(0,0,0,length+strY);
  
  pop();
}

function letter_I ( strX,  strY) {
  push();
   
    
  line(0, 0, width+strX, 0);
  line(0, length+strY, width+strX, length+strY);
  line(width/2+strX/2, 0, width/2+strX/2, length+strY);
  pop();
}

function letter_i ( strX,  strY) {
  push();
   
    

  beginShape();
  vertex(0,length/4);
  vertex(width/2+strX/2,length/4);
  vertex(width/2+strX/2,length+strY);
  endShape();
  
  line(0,length+strY, width+strX,length+strY);
  line(width/2+strX/2, 0,  width/2+strX/2, length/8);

  pop();
}

function letter_J ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 2*length/3+strY);
  bezierVertex(0, 2*length/3+strY, 0, length+strY, width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY, width+strX, 2*length/3+strY, width+strX, 2*length/3+strY);
  vertex(width+strX, 0);
  vertex(width/3, 0);
  endShape();
  pop();
}

function letter_j ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width/4,length/4);
  vertex(3*width/4+strX,length/4);
  vertex(3*width/4+strX,length+strY);
  bezierVertex(3*width/4+strX,length+strY,  3*width/4+strX,5*length/4+strY,  width/4+strX,5*length/4+strY);
  vertex(0,5*length/4+strY);
  endShape();
  
  line(3*width/4+strX,0,  3*width/4+strX,length/8);
  
  pop();
}

function letter_K ( strX,  strY) {
  push();
   
    
  line(0, 0, 0, length+strY);
  line(0, 2*length/3+strY, width+strX, 0);

   ang = atan((2*length/3+strY)/(width+strX));
   angX = (length/2+strY/2)/tan(ang);

  line(width+strX-angX, length/2+strY/2, width+strX, length+strY);
  pop();
}

function letter_k ( strX,  strY) {
  push();
   
    
  line(0, 0, 0, length+strY);
  line(width+strX,length/4,  0,3*length/4+strY);
  line(width+strX,length+strY,  width/2+strX/2,length/2+strY/2);

  pop();
}

function letter_L ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(0, length+strY);
  vertex(width+strX, length+strY);
  endShape();
  pop();
}

function letter_l ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(width/2+strX/2, 0);
  vertex(width/2+strX/2,length+strY);
  endShape();

  line(0,length+strY,  width+strX,length+strY);
  pop();
}

function letter_M ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, length+strY);
  vertex(0, 0);
  vertex(width/2+strX/2, 2*length/3+strY);
  vertex(width+strX, 0);
  vertex(width+strX, length+strY);
  endShape();
  pop();
}

function letter_m ( strX,  strY) {
  push();
   
    

  line(0,length/4,0,length+strY);

  //left Hump  
  beginShape();
  vertex(0,3*length/8);
  bezierVertex(0,3*length/8,  0,length/4,  width/4,length/4);
  vertex(width/4+strX/2,length/4);
  bezierVertex(width/2+strX/2,length/4,  width/2+strX/2,3*length/8,  width/2+strX/2,3*length/8);
  vertex(width/2+strX/2,length+strY);
  endShape();
  
  translate(width/2+strX/2,0);
  beginShape();
  vertex(0,3*length/8);
  bezierVertex(0,3*length/8,  0,length/4,  width/4,length/4);
  vertex(width/4+strX/2,length/4);
  bezierVertex(width/2+strX/2,length/4,  width/2+strX/2,3*length/8,  width/2+strX/2,3*length/8);
  vertex(width/2+strX/2,length+strY);
  endShape();  
  
  pop();
}

function letter_N ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, length+strY);
  vertex(0, 0);
  vertex(width+strX, length+strY);
  vertex(width+strX, 0);
  endShape();
  pop();
}

function letter_n ( strX,  strY) {
  push();
   
    
  
  line(0,length/4,0,length+strY);
  
  beginShape();
  vertex(width+strX, length+strY);
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  endShape();
  
  pop();
}

function letter_O ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, length/3);
  bezierVertex(width+strX, length/3, width+strX, 0, width/2+strX, 0);
  vertex(width/2, 0);
  bezierVertex(0, 0, 0, length/3, 0, length/3);
  vertex(0, 2*length/3+strY);
  bezierVertex(0, 2*length/3+strY, 0, length+strY, width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY, width+strX, 2*length/3+strY, width+strX, 2*length/3+strY);
  vertex(width+strX, length/3);
  endShape();
  pop();
}

function letter_o ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  vertex(width+strX, length/2);
  endShape();
  
  pop();
}

function letter_P ( strX,  strY) {
  push();
       
    beginShape();
    vertex(0, length+strY);
    vertex(0, 0);
    vertex(width/2+strX, 0);
    quadraticVertex(width+strX,0,  width+strX,length/4);
    vertex(width+strX, length/4+strY/2);
    quadraticVertex(width+strX, length/2+strY/2,  width/2+strX,length/2+strY/2);
    vertex(0,length/2+strY/2);
    endShape();
  pop();
}

function letter_p ( strX,  strY) {
  push();
   
    
  
  line(0,length/4,  0,5*length/4+strY);
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  vertex(width+strX, length/2);
  endShape();
  
  pop();
}

function letter_Q ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, length/3);
  bezierVertex(width+strX, length/3, width+strX, 0, width/2+strX, 0);
  vertex(width/2, 0);
  bezierVertex(0, 0, 0, length/3, 0, length/3);
  vertex(0, 2*length/3+strY);
  bezierVertex(0, 2*length/3+strY, 0, length+strY, width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY, width+strX, 2*length/3+strY, width+strX, 2*length/3+strY);
  vertex(width+strX, length/3);
  endShape();

  line(width/2+strX/2, length/2+strY, width+strX, length+strY);
  pop();
}

function letter_q ( strX,  strY) {
  push();
   
    
  
  line(width+strX,length/4,  width+strX,5*length/4+strY);
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0, length/4, 0, length/2, 0, length/2);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  vertex(width+strX, length/2);
  endShape();
  
  pop();
}

function letter_R ( strX,  strY) {
  push();
    
    beginShape();
    vertex(0, length+strY);
    vertex(0, 0);
    vertex(width/2+strX, 0);
    quadraticVertex(width+strX,0,  width+strX,length/4);
    vertex(width+strX, length/4+strY/2);
    quadraticVertex(width+strX, length/2+strY/2,  width/2+strX,length/2+strY/2);
    vertex(0,length/2+strY/2);
    endShape();

  line(width/2+strX/2, length/2+strY/2, width+strX, length+strY);
  pop();
}

function letter_r ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(width+strX, length/2);
  bezierVertex(width+strX, length/2,  width+strX, length/4,  width/2+strX, length/4);
  vertex(width/2, length/4);
  bezierVertex(0,length/4,  0,length/2,  0,length/2);
  endShape();
  
  line(0,length/4, 0,length+strY);
  
  pop();
}

function letter_S ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(width+strX, length/4);
  bezierVertex(width+strX, length/4, width+strX, 0, width/2+strX, 0);
  vertex(width/2, 0);
  bezierVertex(0, 0, 0, length/4, 0, length/4);
  bezierVertex(0, 2*length/3+strY, width+strX, length/3, width+strX, 3*length/4+strY);
  bezierVertex(width+strX, 3*length/4+strY, width+strX, length+strY, width/2+strX, length+strY);
  vertex(width/2, length+strY);
  bezierVertex(0, length+strY, 0, 2*length/3+strY, 0, 2*length/3+strY);
  endShape();
  pop();
}

function letter_s ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(7*width/8+strX,3*length/8);
  bezierVertex(7*width/8+strX,3*length/8,  7*width/8+strX,length/4,  width/2+strX,length/4);
  vertex(width/2,length/4);
  bezierVertex(width/8,length/4,  width/8,3*length/8, width/8,3*length/8);
  bezierVertex(width/8,5*length/8+strY,  width+strX,3*length/8,  width+strX,3*length/4+strY);
  bezierVertex(width+strX,3*length/4+strY,  width+strX,length+strY,  width/2+strX,length+strY);
  vertex(width/2,length+strY);
  bezierVertex(0,length+strY,  0,3*length/4+strY,  0,3*length/4+strY);
  endShape();
  
  pop();
}

function letter_T ( strX,  strY) {
  push();
   
    
  line(0, 0, width+strX, 0);
  line(width/2+strX/2, 0, width/2+strX/2, length+strY);
  pop();
}

function letter_t ( strX,  strY) {
  push();
   
    
  
  line(0,length/4,  width+strX,length/4);
  
  beginShape();
  vertex(width/2+strX/2,0);
  vertex(width/2+strX/2,3*length/4+strY);
  bezierVertex(width/2+strX/2,3*length/4+strY,  width/2+strX/2,length+strY,  3*width/4+strX/2,length+strY);
  vertex(width+strX,length+strY);  
  endShape();
  
  pop();
}

function letter_U ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(0, 2*length/3+strY);
  bezierVertex(0, 2*length/3+strY, 0, length+strY, width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY, width+strX, 2*length/3+strY, width+strX, 2*length/3+strY);
  vertex(width+strX, 0);
  endShape();
  pop();
}

function letter_u ( strX,  strY) {
  push();
   
    
  
  line(width+strX,length/4,  width+strX,length+strY);
  
  beginShape();
  vertex(0,length/4);
  vertex(0, 3*length/4+strY);
  bezierVertex(0, 3*length/4+strY,  0, length+strY,  width/2, length+strY);
  vertex(width/2+strX, length+strY);
  bezierVertex(width+strX, length+strY,  width+strX, 3*length/4+strY,  width+strX, 3*length/4+strY);
  endShape();
  
  pop();
}

function letter_V ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(width/2+strX/2, length+strY);
  vertex(width+strX, 0);
  endShape();
  pop();
}

function letter_v ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(0, length/4);
  vertex(width/2+strX/2, length+strY);
  vertex(width+strX, length/4);
  endShape();
  
  pop();
}

function letter_W ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(width/4, length+strY);
  vertex(width/2+strX/2, length/3);
  vertex(3*width/4+strX, length+strY);
  vertex(width+strX, 0);
  endShape();
  pop();
}

function letter_w ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(0, length/4);
  vertex(width/4+strX/4, length+strY);
  vertex(width/2+strX/2, length/2+strY/2);
  vertex(3*width/4+3*strX/4,  length+strY);
  vertex(width+strX, length/4);
  endShape();
  
  pop();
}

function letter_X ( strX,  strY) {
  push();
   
    
  line(0, 0, width+strX, length+strY);
  line(0, length+strY, width+strX, 0);
  pop();
}

function letter_x ( strX,  strY) {
  push();
   
    
  line(0, length/4, width+strX, length+strY);
  line(0, length+strY, width+strX, length/4);
  pop();
}

function letter_Y ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(width/2+strX/2, length/2+strY/2);
  vertex(width+strX, 0);
  endShape();

  line(width/2+strX/2, length/2+strY/2, width/2+strX/2, length+strY);
  pop();
}

function letter_y ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(0, length/4);
  vertex(width/2+strX/2, length+strY);
  vertex(width+strX, length/4);
  endShape();
  
  beginShape();
  vertex(width/2+strX/2,length+strY);
  bezierVertex(width/2+strX/2,length+strY,  width/2+strX/2,5*length/4+strY,  strX/2,5*length/4+strY);
  vertex(0,5*length/4+strY);
  endShape();
  
  pop();
}


function letter_Z ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, 0);
  vertex(width+strX, 0);
  vertex(0, length+strY);
  vertex(width+strX, length+strY);
  endShape();
  pop();
}

function letter_z ( strX,  strY) {
  push();
   
    
  
  beginShape();
  vertex(0, length/4);
  vertex(width+strX, length/4);
  vertex(0, length+strY);
  vertex(width+strX, length+strY);
  endShape();
  
  pop();
}

function letter_underscore ( strX,  strY) {
  push();
   
    
  line(0, length+strY, width+strX, length+strY);
  pop();
}

function letter_dash ( strX,  strY) {
  push();
   
    
  line(0, length/2+strY/2, width+strX, length/2+strY/2);
  pop();
}

function letter_question ( strX,  strY) {
  push();
   
    
  beginShape();
  vertex(0, length/3);
  bezierVertex(0, length/3, 0, 0, width/2, 0);
  vertex(width/2+strX, 0);
  bezierVertex(width+strX, 0, width+strX, length/3, width+strX, length/3);
  vertex(width+strX, length/3+strY);
  bezierVertex(width+strX, length/3+strY, width+strX, length/3+length/4+strY, width/2+strX/2, length/3+length/4+strY);
  vertex(width/2+strX/2, 3*length/4+strY);
  endShape();

  line(width/2+strX/2, 7*length/8+strY, width/2+strX/2, length+strY);
  pop();
}

function letter_period ( strX,  strY) {
  push();
   
    
  line(width/2+strX/2, 7*length/8+strY, width/2+strX/2, length+strY);
  pop();
}

function letter_colon ( strX,  strY) {
  push();
   
    
  line(width/2+strX/2, length/2+strY/2-length/8, width/2+strX/2, length/2+strY/2);
  line(width/2+strX/2, 7*length/8+strY, width/2+strX/2, length+strY);
  pop();
}

function letter_semicolon ( strX,  strY) {
  push();
   
    
  line(width/2+strX/2, length/2+strY/2 - length/8, width/2+strX/2, length/2+strY/2);
  line(width/2+strX/2, 7*length/8+strY, width/2+strX/2 - width/4, length+strY);
  pop();
}

function letter_comma ( strX,  strY) {
  push();
   
   
  line(width/2+strX/2, 7*length/8+strY, width/2+strX/2 - width/4, length+strY);
  pop();
}

function letter_exclaim ( strX,  strY) {
  push();
   
    
  line(width/2+strX/2, 0, width/2+strX/2, 3*length/4+strY);

  line(width/2+strX/2, 7*length/8+strY, width/2+strX/2, length+strY);
  pop();
}

function letter_slash ( strX,  strY) {
  push();
   
    
  line(0, length+strY, width+strX, 0);
  pop();
}

function letter_amp ( strX,  strY) {
  push();
   
    
    beginShape();
    vertex(width+strX,length+strY);
    quadraticVertex(width/8,length/4,  width/8,length/8);
    quadraticVertex(width/8,0,  3*width/8,0);
    vertex(3*width/8+strX,0);
    bezierVertex(5*width/8+strX,0,  5*width/8+strX,length/8,  5*width/8+strX,length/8);
    bezierVertex(5*width/8+strX,length/4,  0,length/2+strY,  0,3*length/4+strY);
    quadraticVertex(0,length+strY,  width/2,length+strY);
    vertex(width/2+strX,length+strY);
    bezierVertex(width+strX,length+strY,  width+strX,length/2+strY/2, width+strX,length/2+strY/2);
    vertex(3*width/4+strX,length/2+strY/2);
    endShape();
  pop();
}

function letter_space ( strX,  strY) {
  push();

  pop();
}

function one (strX,  strY) {
  push();

    beginShape();
    vertex(0,length/4);
    vertex(width/2+strX/2,0);
    vertex(width/2+strX/2,length+strY);
    endShape();
    
    line(0,length+strY,width+strX,length+strY);
  pop();
}

function two (strX,  strY) {
  push();

    beginShape();
    vertex(0,length/3);
    quadraticVertex(0,0,width/2,0);
    vertex(width/2+strX,0);
    quadraticVertex(width+strX,0,width+strX,length/3);
    vertex(width+strX,length/3+strY);
    bezierVertex(width+strX,2*length/3+strY,0,2*length/3+strY,0,length+strY);
    vertex(width+strX,length+strY);
    endShape();
  pop();
}

function three (strX,  strY) {
  push();

    beginShape();
    vertex(0,0);
    vertex(width+strX,0);
    vertex(width/2+strX/2,length/3);
    quadraticVertex(width+strX,length/3,width+strX,2*length/3);
    vertex(width+strX,2*length/3+strY);
    quadraticVertex(width+strX,length+strY,width/2+strX,length+strY);
    vertex(width/2,length+strY);
    bezierVertex(0,length+strY,0,2*length/3+strY,0,2*length/3+strY);
    endShape();
  pop();
}

function four (strX,  strY) {
  push();

    beginShape();
    vertex(width/3,0);
    vertex(0,2*length/3+strY);
    vertex(width+strX,2*length/3+strY);
    endShape();
    line(2*width/3+strX,0,2*width/3+strX,length+strY);
  pop();
}

function five (strX,  strY) {
  push();

    beginShape();
    vertex(width+strX,0);
    vertex(0,0);
    vertex(0,length/3);
    vertex(width/2+strX,length/3);
    quadraticVertex(width+strX,length/3,width+strX,2*length/3);
    vertex(width+strX,2*length/3+strY);
    quadraticVertex(width+strX,length+strY,width/2+strX,length+strY);
    bezierVertex(0,length+strY,0,2*length/3+strY,0,2*length/3+strY);
    endShape();
  pop();
}

function six (strX,  strY) {
  push();

    beginShape();
    vertex(width+strX,2*length/3+strY);
    quadraticVertex(width+strX,length+strY,width/2+strX,length+strY);
    vertex(width/2,length+strY);
    bezierVertex(0,length+strY,0,2*length/3+strY,0,2*length/3+strY);
    vertex(0,2*length/3);
    quadraticVertex(0,length/3,width/2,length/3);
    vertex(width/2+strX,length/3);
    bezierVertex(width+strX,length/3,width+strX,2*length/3,width+strX,2*length/3);
    vertex(width+strX,2*length/3+strY);
    endShape();
    
    beginShape();
    vertex(0,2*length/3);
    quadraticVertex(0,0,2*width/3,0);
    endShape();
  pop();
}

function seven (strX,  strY) {
  push();

    beginShape();
    vertex(0,0);
    vertex(width+strX,0);
    vertex(width/2+strX/2,length+strY);
    endShape();
  pop();
}

function eight (strX,  strY) {
  push();

    beginShape();
    vertex(0,length/4);
    quadraticVertex(0,0,width/2,0);
    vertex(width/2+strX,0);
    bezierVertex(width+strX,0,width+strX,length/4,width+strX,length/4);
    vertex(width+strX,length/4+strY/2);
    quadraticVertex(width+strX,length/2+strY/2,width/2+strX,length/2+strY/2);
    vertex(width/2,length/2+strY/2);
    bezierVertex(0,length/2+strY/2,0,length/4+strY/2,0,length/4+strY/2);
    vertex(0,length/4);
    endShape();
    
    translate(0,length/2+strY/2);//bottom hump
    beginShape();
    vertex(0,length/4);
    quadraticVertex(0,0,width/2,0);
    vertex(width/2+strX,0);
    bezierVertex(width+strX,0,width+strX,length/4,width+strX,length/4);
    vertex(width+strX,length/4+strY/2);
    quadraticVertex(width+strX,length/2+strY/2,width/2+strX,length/2+strY/2);
    vertex(width/2,length/2+strY/2);
    bezierVertex(0,length/2+strY/2,0,length/4+strY/2,0,length/4+strY/2);
    vertex(0,length/4);
    endShape();
    
  pop();
}

function nine (strX,  strY) {
  push();

    beginShape();
    vertex(0,length/3);
    quadraticVertex(0,0,width/2,0);
    vertex(width/2+strX,0);
    bezierVertex(width+strX,0,width+strX,length/3,width+strX,length/3);
    vertex(width+strX,length/3+strY);
    quadraticVertex(width+strX,2*length/3+strY,width/2+strX,2*length/3+strY);
    vertex(width/2,2*length/3+strY);
    bezierVertex(0,2*length/3+strY,0,length/3+strY,0,length/3+strY);
    vertex(0,length/3);
    endShape();
    
    line(width+strX,length/3+strY,width+strX,length+strY);
  pop();
}

function zero (strX,  strY) {
  push();

    beginShape();
    vertex(width/2+strX,0);
    quadraticVertex(width+strX,0,  width+strX,length/3);
    vertex(width+strX,2*length/3+strY);
    quadraticVertex(width+strX,length+strY,  width/2+strX,length+strY);
    vertex(width/2,length+strY);
    quadraticVertex(0,length+strY,  0,2*length/3+strY);
    vertex(0,length/3);
    quadraticVertex(0,0,  width/2,0);
    vertex(width/2+strX,0);
    endShape();
    
    line(2*width/3 + strX,length/3,width/3,2*length/3+strY);
  pop();
}