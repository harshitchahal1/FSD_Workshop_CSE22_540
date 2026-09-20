const EventEmitter = require("events");

const schoolBell = new EventEmitter();

schoolBell.on("classStart", () => {
    console.log("Class Started - Ring the bell!");
});


schoolBell.on("classEnd", () => {
    console.log("Class Ended - Ring the bell!");
});


schoolBell.emit("classStart");
schoolBell.emit("classEnd");

setTimeout(() => {
    console.log("setTimeout: Ring bell");
}, 5000);

setImmediate(() => {
    console.log("setImmediate: Ring bell");
});

process.nextTick(() => {
    console.log("process.nextTick: Ring bell");
});

console.log("School Bell System Started");