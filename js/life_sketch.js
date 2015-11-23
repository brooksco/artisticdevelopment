var cellArray = new Array(new Array());
var cellSize = 40;
var numX;
var numY;
var width = 200;
var height = 100;

var touched = false;
var touchedX = 0;
var touchedY = 0;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(30);
  // stroke(0);
  noStroke();

  if (windowWidth > windowHeight) {
    cellSize = windowWidth/30;

  } else {
    cellSize = windowHeight/30;
  }

  numX = ceil(windowWidth/cellSize);
  numY = ceil(windowHeight/cellSize);
  restart();

  // smooth();
}

function touchEnded() {
  // restart();
  println("start");
  println(touchX);
  touchedX = touchX;
  touchedY = touchY;
  touched = true;
 
  // println(cellArray[x][y].returnState());
  // cellArray[x][y].state = 255;
  // cellArray[x][y].nextState = 255;
}

function draw() {


  for (x = 0; x < numX; x++) {
    for (y = 0; y < numY; y++) {
      cellArray[x][y].calcNextState();
    }
  }

  translate(cellSize/2, cellSize/2);

  for (x = 0; x < numX; x++) {
    for (y = 0; y < numY; y++) {
      cellArray[x][y].drawMe();
    }
  }

}


function cell(initX, initY) {
  var x = initX * cellSize;
  var y = initY * cellSize;

  var nextState = ((x / windowWidth) + (y / windowHeight)) * cellSize;
  if (nextState > 255) {
    nextState = 255;
  }
  // var nextState = random(255);
  var state = nextState;
  var lastState = 0;
  var neighbors = [];


  this.addNeighbor = function(neighbor) {
    neighbors.push(neighbor);
  }

  this.returnState = function() {
    return state;
  }

  this.calcNextState = function() {
    var total = 0;

    for (i = 0; i < neighbors.length; i++) {
      total += neighbors[i].returnState();
    }

    var average = total / 8;

    if (average >= 255) {
      // nextState = 0; // only happens towards the beginning
      // Not sure about this
      if (random(10) > 5) {
        nextState = 0;
      }

    } else if (floor(average) == 0) {
      // Not sure about this
      nextState = random(255);

    } else {
      nextState = state + (average*.95);
      
      if (lastState > 0) {
        nextState -= lastState;
      }

      if (nextState > 255) { 
        nextState = 255;

      } else if (nextState < 0) {
        nextState = 0;
      }

    }
    
    lastState = state;


    if (touched) {
      if ((x == touchedX) && (y == touchedY)) {

        println("here");
        // for (i = 0; i < neighbors.length; i++) {
        //   neighbors[i].state = 255;
        //   neighbors[i].nextState = 255;

        //   println(neighbors[i].returnState());
        // }

        println("Yep touched");
        println(x);
        println(y);
        state = 255;
        nextState = 255;
        touched = false;
        println("state");
        println(state);
      }
    }

  }


  this.drawMe = function() {
    state = nextState;

    fill(state);
    rect(x - cellSize/2, y - cellSize/2, cellSize, cellSize); // fill frame
  }
}


function restart() {
  // cellArray = [];

  for (x = 0; x < numX; x++) {
    cellArray[x] = [];

    for (y = 0; y < numY; y++) {
      var newCell = new cell(x, y);
      cellArray[x][y] = newCell;
    }

  }

  for (x = 0; x < numX; x++) {
    for (y = 0; y < numY; y++) {

      var above = y - 1;
      var below = y + 1;
      var left = x - 1;
      var right = x + 1;

      if (above < 0) {
        above = numY - 1;
      }
      if (below == numY) {
        below = 0;
      }
      if (left < 0) {
        left = numX - 1;
      }
      if (right == numX) {
        right = 0;
      }

      cellArray[x][y].addNeighbor(cellArray[left][above]);
      cellArray[x][y].addNeighbor(cellArray[left][y]);
      cellArray[x][y].addNeighbor(cellArray[left][below]);
      cellArray[x][y].addNeighbor(cellArray[x][below]);
      cellArray[x][y].addNeighbor(cellArray[right][below]);
      cellArray[x][y].addNeighbor(cellArray[right][y]);
      cellArray[x][y].addNeighbor(cellArray[right][above]);
      cellArray[x][y].addNeighbor(cellArray[x][above]);
    }
  }
}