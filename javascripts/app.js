// Rover's Grid
// ======================
var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 ];
console.log(grid);

// Rover Object Goes Here
// ======================
function rover(name, direction, positionX, positionY, travelLog) {
  this.name = name;
  this.direction = direction;
  this.position = [positionX, positionY];
  this.travelLog = [];
}

function comandsInitRover(rover) {
  grid[rover.position[0]][rover.position[1]] = rover;

  console.log('Posición inicial del Rover: [' + rover.position[0] + ',' + rover.position[1] + ']');
}

// Rover's Moves
// ======================
function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }
}

function turnRight(rover) {
  console.log('turnRight was called!');
  switch (rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function moveForward(rover) {
  console.log('moveForward was called');
  grid[rover.position[1]][rover.position[0]] = 0;
    switch (rover.direction) {
      case 'N':
        rover.position[1] -= 1;
        break;
      case 'E':
        rover.position[0] += 1;
        break;
      case 'S':
        rover.position[1] += 1;
        break;
      case 'W':
        rover.position[0] -= 1;
        break;
      }
}

var move = function (command) {
  for (var i = 0; i < command.length; i++) {
    if (command[i] === 'l') {
      turnLeft(this);
    } else if (command[i] === 'r') {
      turnRight(this);
    } else if (command[i] === 'f') {
      moveForward();
    } else if (command[i] === 'b') {
      moveBackward();
    }
  }
};
