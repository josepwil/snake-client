// LINE 2 & 3 === LINE 4 
// const connectObj = require('./client');
// const connect = connectObj.connect;
const  { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const theConnection = connect();



setupInput(theConnection);