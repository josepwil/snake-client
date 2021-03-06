const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // event handler for handling incoming data and displaying it to player
  conn.on('data', (data) => {
    console.log(data);
  })
  // event handling for when we connect to the game server
  conn.on('connect', () => {
    console.log('Succesfully connected to game server')
    // writing message to the server 
    conn.write('Name: JRW');
    // conn.write('Move: up');

  })

  return conn;
}

module.exports = {
  connect   
}