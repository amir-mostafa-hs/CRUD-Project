const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

const PORT = 8080;

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
