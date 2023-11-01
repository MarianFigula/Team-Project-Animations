// ---------------------------------------------------------------------------
//
//                                  CH5M3D
//                              Version 1.2.5
//                          Written by Clarke Earley
//
// ---------------------------------------------------------------------------

// kniznica, ktora vycentruje strukturu, otaca okolo vybranej osi a ovlada canvas (kurzor, click..)

function centerStructure() {
  var i, A;
  var size = 0.0;
  var xc = 0.0, yc = 0.0, zc = 0.0;
  var xyz;

  // Get height of Canvas
  var canvas = document.getElementById("canvas_structure");
  var height = canvas.height;

  // Find center of structure
  for (i = 1; i <= structure.num_atoms; i++) {
    xc += structure.atoms[i].x;
    yc += structure.atoms[i].y;
    zc += structure.atoms[i].z;
  }
  xc /= structure.num_atoms;
  yc /= structure.num_atoms;
  zc /= structure.num_atoms;

  // Translate coordinates to center
  for (i = 1; i <= structure.num_atoms; i++) {
    A = structure.atoms[i].atomic_number;
    structure.atoms[i].x -= xc;
    structure.atoms[i].y -= yc;
    structure.atoms[i].z -= zc;
    xyz = Math.abs(structure.atoms[i].x);
    xyz = Math.max(xyz, Math.abs(structure.atoms[i].y));
    xyz = Math.max(xyz, Math.abs(structure.atoms[i].z));
    xyz += structure.atoms[i].element.radius;
    size = Math.max(size, xyz);
  }
  structure.atomscale = 0.5 * height / size;
}

function RotateStructure(axis) {
  // Declare local variables
  var delay = 10;  // Delay between redrawing screen, in ms

  // Parameter validation
  axis = axis[0].toLowerCase();
  if ( (axis != "x") &&  (axis != "y") && (axis != "z") && (axis != "s") ) {
    return;
  }

  // If first call, initialize "active" variable
  if(typeof RotateStructure.RX === "undefined") {
    RotateStructure.RX = 0;
    RotateStructure.RY = 0;
    RotateStructure.RZ = 0;
  }

  // Start/Stop rotation
  switch (axis) {
    case 'x':
      if ( RotateStructure.RX == 0 ) {
        // Start rotation
        RotateStructure.RX = 1;
        RotateX_ID = setInterval( "rotateX()", delay );
      } else {
        // Stop rotation
        RotateStructure.RX = 0;
        clearInterval( RotateX_ID );
      }
      break;
    case 'y':
      if ( RotateStructure.RY == 0 ) {
        // Start rotation
        RotateStructure.RY = 1;
        RotateY_ID = setInterval( "rotateY()", delay );
      } else {
        // Stop rotation
        RotateStructure.RY = 0;
        clearInterval( RotateY_ID );
      }
      break;
    case 'z':
      if ( RotateStructure.RZ == 0 ) {
        // Start rotation
        RotateStructure.RZ = 1;
        RotateZ_ID = setInterval( "rotateZ()", delay );
      } else {
        // Stop rotation
        RotateStructure.RZ = 0;
        clearInterval( RotateZ_ID );
      }
      break;
    case 's':
      if ( RotateStructure.RX != 0 ) {
        RotateStructure.RX = 0;
        clearInterval( RotateX_ID);
      }
      if ( RotateStructure.RY != 0 ) {
        RotateStructure.RY = 0;
        clearInterval( RotateY_ID);
      }
      if ( RotateStructure.RZ != 0 ) {
        RotateStructure.RZ = 0;
        clearInterval( RotateZ_ID);
      }
      break;
  }
  // End of RotateStructure function
}

function rotateX() {
  var i, y, z;
  var angle = 1.0;
  var cosA = Math.cos(- angle * Math.PI / 180);
  var sinA = Math.sin(- angle * Math.PI / 180);

  // Draw structure and display on canvas
  for (i = 1; i <= structure.num_atoms; i++) {
    y = structure.atoms[i].y;
    z = structure.atoms[i].z;
    structure.atoms[i].y =  cosA * y + sinA * z;
    structure.atoms[i].z = -sinA * y + cosA * z;
  }
  drawStructure();
}

function rotateY() {
  var i, x, z;
  var angle = 1.0;
  var cosA = Math.cos(-angle * Math.PI / 180);
  var sinA = Math.sin(-angle * Math.PI / 180);

  // Draw structure and display on canvas
  for (i = 1; i <= structure.num_atoms; i++) {
    x = structure.atoms[i].x;
    z = structure.atoms[i].z;
    structure.atoms[i].x =  cosA * x + sinA * z;
    structure.atoms[i].z = -sinA * x + cosA * z;
  }
  drawStructure();
}

function rotateZ() {
  var i, x, y;
  var angle = 1.0;
  var cosA = Math.cos(-angle * Math.PI / 180);
  var sinA = Math.sin(-angle * Math.PI / 180);

  // Draw structure and display on canvas
  for (i=1; i <= structure.num_atoms; i++) {
    x = structure.atoms[i].x;
    y = structure.atoms[i].y;
    structure.atoms[i].x =  cosA * x + sinA * y;
    structure.atoms[i].y = -sinA * x + cosA * y;
  }
  drawStructure();
}

// -------------------- mouse.js file --------------------

function mouseState(option, value) {
  // Initialize parameters as necessary
  if ( typeof mouseState.DownAtom == 'undefined' )
    mouseState.DownAtom = -1;

  if ( option == "Show" )
    return mouseState.DownAtom;

  if ( option == "Set" )
    mouseState.DownAtom = value;
}

function MouseDown() {
  mouseState( "Set", 0 );
}

function MouseUp() {
  mouseState("Set", -1);
}

function MouseWheel(evt) {
  // Stop window scrolling
  if (evt.preventDefault)
    evt.preventDefault();

  //  Firefox and Opera use detail, Chrome uses wheelDelta(?)
  var delta = evt.detail ? evt.detail*(-1) : evt.wheelDelta;
  var newScale = (delta > 0) ? 1.1 : 0.9;
  structure.atomscale = structure.atomscale * newScale;
  drawStructure();
  return false;
}

function MouseMove(evt) {
  var newx, newy;
  var dx, dy;
  var x, y, z;
  var cosx, cosy, sinx, siny;
  var step=2;  // Smaller values make less sensitive

  // Save old (x,y) coordinates
  if ( typeof MouseMove.cx == 'undefined' )
    MouseMove.cx = 250;
  if ( typeof MouseMove.cy == 'undefined' )
    MouseMove.cy = 250;

  // Only rotate if mouse pressed
  if ( mouseState("Show") == 0 ) {

    // Map touch screen and mouse buttons
    newx = evt.pageX;
    newy = evt.pageY;
    // If touch screen
    if (evt.targetTouches) {
      if (evt.targetTouches.length == 1) {
        newx = evt.targetTouches[0].pageX;
        newy = evt.targetTouches[0].pageY;
      }
    }

    // Record movement
    dx = (MouseMove.cx - newx);
    dy = (MouseMove.cy - newy);
    MouseMove.cx = newx;
    MouseMove.cy = newy;
    if ( Math.abs(dx) + Math.abs(dy) > 10)
      return;

    // Rotate entire structure
    cosx = Math.cos(dy * step * Math.PI / 180);
    sinx = Math.sin(dy * step * Math.PI / 180);
    cosy = Math.cos(dx * step * Math.PI / 180);
    siny = Math.sin(dx * step * Math.PI / 180);
    for (i = 1; i <= structure.num_atoms; i++) {
      x = structure.atoms[i].x;
      y = structure.atoms[i].y;
      z = structure.atoms[i].z;
      structure.atoms[i].x = cosy*x + siny*z;
      structure.atoms[i].y = -sinx*siny*x + cosx*y + sinx*cosy*z;
      structure.atoms[i].z = -cosx*siny*x - sinx*y + cosx*cosy*z;
    }
    drawStructure();
  }
}

// -------------------- End --------------------

function initialize() {
  var canvas = document.getElementById("canvas_structure");
  if ( canvas ) {
    canvas.onmousedown = MouseDown;
    document.onmouseup = MouseUp;
    canvas.onmousemove = MouseMove;
    canvas.addEventListener("mousewheel", MouseWheel, false);  // IE9,Chrome,Safari,Opera
    canvas.addEventListener("DOMMouseScroll", MouseWheel, false); // Firefox
    canvas.addEventListener("touchstart", MouseDown);
    canvas.addEventListener("touchend", MouseUp);
    canvas.addEventListener("touchmove", MouseMove);
  }
  loadStructure();
  centerStructure();
  drawStructure();
}