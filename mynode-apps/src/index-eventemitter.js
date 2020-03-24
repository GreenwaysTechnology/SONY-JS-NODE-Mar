const EventEmitter = require('events');

//create Object 
const event = new EventEmitter();

//Bind event
event.on('tick', data => console.log(data));

//emit event:
event.emit('tick', 'Hey')
//with timer , lets say i want to emit event after few seconds
setTimeout(() => event.emit('tick', 'I am late!'), 1000);
////////////////////////////////////////////////////////////////////////////////
//Event Emitter with domain objects

class Inventory extends EventEmitter {
    constructor() {
        super();
        this.on('sale', product => console.log(product));
    }
    //add biz method
    update(product) {
        this.emit('sale', product);
    }
}
//create object

let inv = new Inventory();
inv.update({ id: 1, name: 'Medicine' });

