var PI2 = Math.PI * 2,
  // canvas vars
  canvasWidth = 500,
  canvasHeight = 500,
  canvas = document.querySelector('.js-canvas'),
  ctx = canvas.getContext('2d'),
  // vars for the circles
  circles = [],
  circleDiameter = 40,
  circleRadius = circleDiameter * 0.5,
  circleSpacing = 5,
  rotateSpeed = 0.007,
  showCircles = false,
  showDebugColors = false,
  // calculate rows & cols
  numCols = Math.round(canvasWidth / (circleRadius + circleSpacing) - 5),
  numRows = Math.round(canvasHeight / (circleRadius + circleSpacing) - 5);

// set canvas size
canvas.setAttribute('width', canvasWidth);
canvas.setAttribute('height', canvasHeight);

function Circle(x, y, radius, angle, color) {
  this.x = x;
  this.y = y;

  this.radius = radius;
  this.angle = angle;
  this.color = color;
}

Circle.prototype = {
  update: function() {
    // speed of the rotation
    this.angle += rotateSpeed;
  },

  draw: function(ctx) {
    // draw dot
    ctx.beginPath();
    ctx.fillStyle = '#ffffff';
    ctx.arc(
      this.x + Math.cos(this.angle) * this.radius + 70,
      this.y + Math.sin(this.angle) * this.radius + 70,
      3,
      0,
      PI2
    );
    ctx.fill();
    ctx.closePath();
  }
};

createCircles();
run();

function createCircles() {
  var x = 0,
    y = 0,
    angle = 0,
    diagonal = 0,
    totalCircles = numCols * numRows,
    circle,
    i,
    q;

  // loop over rows
  for (q = 0; q < numRows; q++) {
    // add columns on each row
    for (i = 0; i < numCols; i++) {
      // get starting angle for the dot
      angle = getAngle(diagonal);

      circle = new Circle(x, y, circleRadius, angle, '');
      circle.draw(ctx);

      circles.push(circle);

      // update diagonal
      diagonal = q + i;
      x += circleRadius + circleSpacing;
    }

    x = 0;
    y += circleRadius + circleSpacing;
  }
}

function run() {
  window.requestAnimationFrame(run);

  var i = circles.length,
    circle;

  // clear
  ctx.fillStyle = '#036ff5';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // loop over all circles and update and draw them
  while (i--) {
    circle = circles[i];
    circle.update();
    circle.draw(ctx);
  }
}

function getAngle(diagonal) {
  return PI2 * (diagonal / numRows);
}
