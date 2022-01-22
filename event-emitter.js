// EVENTEMITTER is a class that requires the events module
const EventEmitter = require('events');

// create a custom emitter that extends from the Event emitter class
const customEmitter = new EventEmitter;

// the event emitter has th on and emitt method
//  the on method keep track of the order, it could take additional arguments
customEmitter.on('response', (name, id)=>{
    console.log(`Data has been recieved name: ${name} with id: ${id}`);
});

customEmitter.on('response', ()=>{
    console.log('Data has been recieved');
});

// emit returns the resposne to the order 
customEmitter.emit('response', 'john', 43);