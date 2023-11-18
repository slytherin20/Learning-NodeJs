const EventEmitter = require("events");

class Logger extends EventEmitter{
    log(msg){
        this.emit("logging",msg)
    }
}

module.exports = Logger;