const http = require("http");
const url = require("url");

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  const parsedURL = url.parse(req.url, true);
  const pathname = parsedURL.pathname;
  const query = parsedURL.query;

  if (pathname === "/create" && req.method === "POST") {
    const characterClass = query.characterClass;
    const gender = query.gender;
    const fact = query.fact;
    res.writeHead(201);
    if (query.characterClass === "warrior") {
      console.log("Your character is a warrior.");
    } else if (query.characterClass === "mage") {
      console.log("Your character is a mage.");
    } else if (query.characterClass === "rogue") {
      console.log("Your character is a rogue.");
    }
    res.end(
      `Your character is a ${gender} ${characterClass} and a fun fact about them is: ${fact}`
    );
  } else if (pathname === "/confirm" && req.method === "POST") {
    res.writeHead(200);
    res.end("Your character was created.");
  } else if (pathname === "/view" && req.method === "GET") {
    res.writeHead(200);
    res.end(
      `Your character is a female warrior and a fun fact about them is: trilingual`
    );
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = server;

//res.writeHead(`Your character is a ${query.class} and is a ${query.gender} and a fun fact about them is: ${query.fact}`)
