const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter {
    constructor() {
        super();
        
        setInterval(() => {
            this.emit('newlesson', {
                price: Math.random() * 100
            })
        }, 3000)
    }
}

// geektime.addListener('newlesson', res=>{
//     if(res.price<80){
//         console.log('buy>>',res.price)
//     }
// })
module.exports = new Geektime;