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
return conn;
};

module.exports =  connect 