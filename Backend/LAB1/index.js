import EventEmmiter from "node:events";
const myEmmiter = new EventEmmiter();

myEmmiter.on("greet",(teacher)=>{
    console.log(`class started ${teacher}`);
})

myEmmiter.on("exit",(teacher)=>{
    console.log(`class finished ${teacher}`);
})
myEmmiter.emit("greet","sir");
myEmmiter.emit("exit","sir");