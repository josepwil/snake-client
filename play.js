const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // event handler for handling incoming data and displaying it to player
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

console.log('Connecting ...');
connect();