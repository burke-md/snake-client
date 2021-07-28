
const net = require("net");

const  connect  = require('./client.js')

console.log("Connecting...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (keyPress) {
    if (keyPress === '\u0003') {
      console.log('get wrecked bitch')
      process.exit()
    }
  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();


