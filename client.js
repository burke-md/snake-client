const net = require("net");
const { IP, PORT } = require("./constants.js");

const connect = function () {
  const conn = net.createConnection({
    port: PORT,
    host: IP,
  });
  //internet incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
  });

  const name = "Name: BRK";
  conn.write(`${name}`);

  return conn;
};

module.exports = { connect };
