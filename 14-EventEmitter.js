const events = require("events");

//creating an object of EventEmitter class
const emitter = new events.EventEmitter();

//Handling custom event
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
});

//Raising custom events
emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "That's good!", "User");

//Listening for user input from the terminal and raise event
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit"){
        emitter.emit("customEvent", "Bye!", "Process");
        process.exit();
    }
    emitter.emit("customEvent", input, "Terminal");
})
