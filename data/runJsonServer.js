const jsonServer = require("json-server");

// create and config json server
const server = jsonServer.create();
// db.json hase fake data
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

const PORT = 8080;

// rum json server in port 8080
const runJsonServer = () => {
  server.use(middlewares);
  server.use(router);
  server.listen(PORT, () => {
    console.log("Json server is run on port:", PORT);
  });
};

/*
  port address :  http://localhost:8080
*/

module.exports = runJsonServer;
