

var offset;
var ooffset;
var offP;
var xStartLow, xStartHigh, yStartLow, yStartHigh, xEndLow, xEndHigh, yEndLow, yEndHigh;

var seed;


// var temp = document.body.scrollTop;
// var temp2 = document.documentElement.scrollTop;
// alert(temp);

function setup() {
  createCanvas(250, 500);
  frameRate(30);
  seed = random(0, 100);
}

//.scrollTop

function draw() {
  // background(255);
  clear();
  randomSeed(seed);

  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);

  // ellipse(40, 40, 80, 80);
  // textSize(32);

  // percent offset from top of screen
  strokeWeight(1);
  stroke(0,0,0);
  // offP = (document.body.scrollTop) / (document.body.offsetHeight - window.innerHeight) * 100;

  offP = ($(document).scrollTop()) / (document.body.offsetHeight - window.innerHeight) * 100;

  // if (offP == 0) {
  //   offP = $(document).scrollTop() / (document.body.offsetHeight - window.innerHeight) * 100;
  // } 

  // textSize(12);
  // text(offP, 10, 10);

  if (offP < 24) {
    strokeWeight(1);
    stroke(0,0,0);
    // starter line
    line(60, 100, 180, 20);

    xStartLow = 0;
    xStartHigh = 100;

    yStartLow = 0;
    yStartHigh = 350;

    xEndLow = 100;
    xEndHigh = 248;

    yEndLow = 0;
    yEndHigh = 350;

    // First few just change weight
    if (offP > 4) { line(95, 110, 130, 140); }
    if (offP > 6) { line(random(xStartLow, xStartHigh), random(yStartLow, yStartHigh), random(xEndLow, xEndHigh), random(yEndLow, yEndHigh)); }
    strokeWeight(3);
    if (offP > 8) { line(random(xStartLow, xStartHigh), random(yStartLow, yStartHigh), random(xEndLow, xEndHigh), random(yEndLow, yEndHigh)); }
    strokeWeight(1);
    if (offP > 10) { line(random(xStartLow, xStartHigh), random(yStartLow, yStartHigh), random(xEndLow, xEndHigh), random(yEndLow, yEndHigh)); }
    
    // Next few change weight and color
    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 12) { line(random(xStartLow, xStartHigh), random(yStartLow, yStartHigh), random(xEndLow, xEndHigh), random(yEndLow, yEndHigh)); }
    strokeWeight(2);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 14) { line(random(xStartLow, xStartHigh), random(yStartLow, yStartHigh), random(xEndLow, xEndHigh), random(yEndLow, yEndHigh)); }
    strokeWeight(1);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 16) { line(random(xStartLow, xStartHigh), random(yStartLow, yStartHigh), random(xEndLow, xEndHigh), random(yEndLow, yEndHigh)); }

    // Last few total random
    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 16.5) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 17) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 17.5) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 18) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 18) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 18.5) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 18.5) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 19) { line(random(250), random(500), random(250), random(500)); }

    strokeWeight(random(1, 10));
    stroke(random(0, 255), random(0, 255), random(0, 255));
    if (offP > 19) { line(random(250), random(500), random(250), random(500)); }
  }


  // Circle time

  if (offP >= 24 && offP < 35) {
    noFill();
    strokeWeight(2);
    stroke(0, 0, 0);

    arc(125, 125, 100, 100, PI+QUARTER_PI, (map(offP, 24, 35, -2.2, PI+QUARTER_PI)));

  }

  // After 86 it starts over
    if (offP < 86) {

    // Real circle time
    if (offP >= 35) {
      strokeWeight(2);
      noFill();
      stroke(0, 0, 0);
      ellipse(125, 125, 100, 100);
    }

    // Start face
    if (offP > 40) {
      strokeWeight(5)
      stroke(40, 150, 16);
      fill(80, 150, 16);

      ellipse(105, 115, 4, 4);
      
      // other eye
      if (offP > 45) {
        strokeWeight(2);
        ellipse(140, 120, 4, 4);
      }

      // mouth
      if (offP > 47) {
        stroke(0,0,0);
        strokeWeight(2);
        noFill();
        arc(123, 140, 40, 20, 0, PI - .1);
      }

      // legs
      if (offP > 48) {
        line(131, 170, 130, 235);
      }

      if (offP > 49) {
        line(108, 160, 110, 235);
      }

      // arms
      if (offP > 50) {
        line(10, 100, 80, 120);
      }

      if (offP > 51) {
        line(170, 140, 225, 120);
      }


      // Name stuff
      strokeWeight(1);
      fill(0,0,0);
      stroke(0,0,0);
      textSize(30);

      if (offP > 58 && offP < 80) {
        text("Brinkletron", 30, 275);
      
      } else if (offP > 57 && offP < 80.5) {
        text("Brinkletro", 30, 275);

      } else if (offP > 56.5 && offP < 81) {
        text("Brinkletr", 30, 275);
      
      } else if (offP > 55.5 && offP < 81.5) {
        text("Brinklet", 30, 275);

      } else if (offP > 54 && offP < 80) {
        text("Brinkletop", 30, 275);
   
      } else if (offP > 53 && offP < 80) {
        text("Brinklet", 30, 275);

      } else if (offP > 52.5 && offP < 82) {
        text("Brinkle", 30, 275);

      } else if (offP > 52 && offP < 82.5) {
        text("Brink", 30, 275);

      } else if (offP > 51.5 && offP < 83) {
        text("Brin", 30, 275);

      }


    }

    // More details

    // Nose
    if (offP > 60) {
        stroke(0,0,0);
        strokeWeight(2);
        line(115, 130, 125, 120);
        line(115, 130, 122, 132);
    }


    // hairs
    if (offP > 65) {
        stroke(100,50,0);
        strokeWeight(4);
        line(130, 80, 133, 74);
    }

    if (offP > 66) {
      line(120, 80, 121, 74);
    }

    if (offP > 67) {
        stroke(100,50,0);
        strokeWeight(4);
        line(135, 80, 140, 74);
    }

    // feet
    if (offP > 68) {
      stroke(0,0,0);
      strokeWeight(2);
      line(130, 235, 120, 236);
    }

    if (offP > 69) {
      stroke(0,0,0);
      strokeWeight(2);
      line(110, 235, 96, 236);
    }


    // Start re-moving and redrawing

    if (offP > 80) {
      stroke(0,0,0);
      strokeWeight(2);
      line(20, 40, 200, 200);
    }

    if (offP > 82.25) { line(200, 200, 100, 10); }
    if (offP > 82.5) { line(100, 10, 120, 250); }
    if (offP > 82.75) { line(120, 250, 125, 15); }
    if (offP > 83) { line(125, 15, 90, 240); }
    if (offP > 83.25) { line(90, 240, 85, 20); }
    if (offP > 83.5) { line(85, 20, 170, 200); }
    if (offP > 83.75) { line(170, 200, 30, 70); }
    if (offP > 84) { line(30, 70, 230, 240); }
    if (offP > 84.25) { line(230, 240, 55, 75); }
    if (offP > 84.5) { line(55, 75, 228, 64); }
    if (offP > 84.75) { line(228, 64, 20, 200); }
  } // post 86


  // New brinkletron
  if (offP > 87) {
    stroke(0,0,0);
    strokeWeight(2);
    noFill();

    ellipse(55, 100, 52, 58);

     // arms
    if (offP > 87.5) {
      line(15, 110, 28, 102);
    }

    if (offP > 88) {
      line(75, 108, 105, 113);
    }

    // legs
    if (offP > 88.5) {
      line(44, 124, 43, 160);
    }

    if (offP > 89) {
      line(60, 122, 60, 159);
    }
    

    // feet
    if (offP > 89.5) {
      line(43, 160, 34, 160);
    }

    if (offP > 90) {
      stroke(0,0,0);
      strokeWeight(2);
      noFill();
      line(60, 159, 71, 160);
    }
    
    // eyes
    if (offP > 90.25) {
      strokeWeight(3)
      stroke(40, 150, 16);
      fill(80, 150, 16);
      ellipse(62, 90, 4, 4);
    }

    if (offP > 90.5) {
      strokeWeight(2);
      ellipse(45, 94, 4, 4);
    }

    // nose
    if (offP > 90.75) {
        stroke(0,0,0);
        strokeWeight(2);
        line(50, 103, 55, 100);
        line(50, 103, 55, 104);
    }

    // mouth
    if (offP > 91) {
      stroke(0,0,0);
      strokeWeight(2);
      noFill();
      arc(52, 105, 24, 15, 0, PI - .1);
    }

     // hairs
    if (offP > 91.25) {
      stroke(100,50,0);
      strokeWeight(4);
      line(40, 75, 43, 70);
    }

    if (offP > 91.5) {
      line(49, 65, 46, 74);
    }

    if (offP > 91.75) {
        stroke(100,50,0);
        strokeWeight(4);
        line(60, 70, 62, 65);
    }

  }

  // friend
  if (offP > 91.75) {
    stroke(0,0,0);
    strokeWeight(2);
    noFill();

    ellipse(160, 105, 59, 63);

     // arms
    if (offP > 92) {
      line(105, 114, 136, 102);
    }

    if (offP > 92.25) {
      line(185, 108, 200, 130);
    }

    // legs
    if (offP > 92.5) {
      line(154, 134, 153, 160);
    }

    if (offP > 92.75) {
      line(170, 135, 172, 165);
    }
    

    // feet
    if (offP > 93) {
      line(153, 160, 144, 161);
    }

    if (offP > 93.25) {
      line(172, 167, 159, 169);
    }
    
    // eyes
    if (offP > 93.5) {
      strokeWeight(3)
      stroke(0, 90, 244);
      fill(80, 150, 16);
      ellipse(168, 98, 4, 4);
    }

    if (offP > 93.75) {
      strokeWeight(2);
      ellipse(147, 94, 4, 4);
    }

    // nose
    if (offP > 94) {
        stroke(0,0,0);
        strokeWeight(2);
        line(150, 103, 153, 98);
        line(150, 103, 153, 104);
    }

    // mouth
    if (offP > 94.25) {
      stroke(0,0,0);
      strokeWeight(2);
      noFill();
      arc(155, 111, 18, 10, 0, PI - .1);
    }

     // hairs
    if (offP > 94.5) {
      stroke(200,200,160);
      strokeWeight(4);
      line(150, 75, 153, 70);
    }

    if (offP > 94.75) {
      line(164, 70, 156, 74);
    }

    if (offP > 94.75) {
      line(174, 70, 156, 74);
    }

    if (offP > 95) {
      line(188, 84, 180, 72);
    }

    if (offP > 95.25) {
        stroke(200,200,160);
        strokeWeight(4);
        line(170, 75, 175, 80);
    }

    strokeWeight(1);
    fill(0,0,0);
    stroke(0,0,0);
    textSize(30);

      if (offP > 99) {
        text("Friends", 30, 210);
      } else if (offP > 98.5) {
        text("Friend", 30, 210);
      } else if (offP > 98) {
        text("Frien", 30, 210);
      } else if (offP > 97.5) {
        text("Frie", 30, 210);
      } else if (offP > 97) {
        text("Fri", 30, 210);
      } else if (offP > 96.5) {
        text("Fr", 30, 210);
      } else if (offP > 96) {
        text("F", 30, 210);
      }


  } // end friend

  
}


