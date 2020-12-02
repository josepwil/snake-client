const setupInput = function() {
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
  }
}


module.exports = {
  setupInput
}