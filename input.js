let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // listen for key press
  stdin.on('data', (key) => {
    // run handleUserInput on key press
    handleUserInput(key);
  })
  return stdin;
}

const handleUserInput = function(key) {
  // if key === ctrl + c, exit the process
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'p') {
    connection.write('Say: *snake noise*');
  } else if (key === 'h') {
    connection.write('Say: help I am trapped');
  }
}


module.exports = {
  setupInput
}