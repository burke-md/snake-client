
const net = require("net");

const  connect  = require('./client.js')

// esstablish a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     port: 50542,
//     host: "135.23.223.133",
//   });
//   conn.setEncoding("utf8");

//   //internet incoming data as text
//   conn.on("data", (data) => {
//     console.log(data);
//   });
//   return conn;
// };

console.log("Connecting...");
connect();
