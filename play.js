// LINE 2 & 3 === LINE 4 
// const connectObj = require('./client');
// const connect = connectObj.connect
const  { connect } = require('./client')
console.log('Connecting ...');
connect();


const setupInput = function(callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // listen for key press
  stdin.on('data',(key) => {
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
setupInput(handleUserInput);