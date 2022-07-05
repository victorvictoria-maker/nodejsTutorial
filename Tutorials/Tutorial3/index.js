const logEvents = require('./eventLog');
const eventEmitter = require('events');

class myEmitter extends eventEmitter{};

// initialize the object
const myEmitterr = new myEmitter();

// add listener for the log event
myEmitterr.on('log', (msg)=>  logEvents(msg));

setTimeout(() => {
    // emit event
    myEmitterr.emit('log', 'Log event emitted.');
}, 3000);