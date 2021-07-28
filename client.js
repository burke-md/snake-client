const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    port: 50542,
    host: "135.23.223.133",
  });
//internet incoming data as text
conn.setEncoding("utf8");
conn.on("data", (data) => {
  console.log(data)
});

conn.on("connect", () => {
  console.log("Successfully connected to game server.")
});

//send message to server w/ .write()
const name = 'Name: BRK'
conn.write(`${name}`)

//move
// setInterval(() => conn.write("Move: up"), 1000);
// setInterval(() => conn.write("Move: left"), 1500);



return conn;
};

module.exports = { connect }