let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function (keyPress) {
    if (keyPress === '\u0003') {
      console.log('Thanks for playing')
      process.exit()

    } else if (keyPress === 'w') {
      connection.write("Move: up")
      // console.log("Move: up")

    } else if (keyPress === 'a') {
      connection.write("Move: left")

    }else if (keyPress === 's') {
      connection.write("Move: down")
      
    }else if (keyPress === 'd') {
      connection.write("Move: right")
    }

  };
  
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput }