/*
  Name: Kylie Struhs
  Date: April 25 2024
  Your server should have at least 3 routes:
  a. A POST route for creating a character. This route should accept query
  parameters for the character’s class (Warrior, Mage, Rogue), gender (Male,
  Female, Other), and a fun fact about your character.
  b. A POST route for confirming the character creation.
  c. A GET route for viewing the character. This must be the same character that
  was created in step 4.a.
*/

const http = require("http");
const server = require("../src/server");
const { hostname } = require("os");

// TODO: Implement your tests here
describe("Server", () => {
  afterAll(() => {
    server.close();
  });

  test("responds to /create POST request with query parameters: warrior, male, trilingual", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create?characterClass=warrior&gender=female&fact=trilingual",
      method: "POST",
    };
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe(
          "Your character is a female warrior and a fun fact about them is: trilingual"
        );
        done();
      });
    });
    req.end();
  });

  test("responds to /view GET request", (done) => {
    http.get("http://localhost:3000/view", (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe(
          "Your character is a female warrior and a fun fact about them is: trilingual"
        );
        done();
      });
    });
  });

  test("responds to /confirm POST request", (done) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST",
    };
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Your character was created.");
        done();
      });
    });
    req.end();
  });
});

/*
describe('Server', () => {
  afterAll(() => {
  server.close();
  });

test("responds to /characterCreation POST request with query parameters: male, warrior", done => {
  const options = {
    hostname: "localhost",
    port: 3000,
    path: '/characterCreation?class=warrior?gender=male?fact=fluent+in+3+languages', // think this could be an issue
    method: "POST"
  };
  const req = http.request(options, res => {
    let data = "";
    res.on('data',chunk => {
      data += chunk;
    });
    res.on('end', () => {
      expect(res.statusCode).toBe(201);
      expect(data).toBe("Your character is being created.");
      done();
    });
  });
  req.end();
});

test("responds to /confirm POST request", done => {
  const options = {
    hostname: "localhost",
    port: 3000,
    path: '/confirm',
    method: "POST"
  };
  const req = http.request(options, res => {
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("end",() => {
      expect(res.statusCode).toBe(200);
      expect(data).toBe("Your character was created.");
      done();
    });
  });
  req.end();
});

test("responds to /view GET request", done => {
  http.get('http://localhost:3000/view', res => {
    let data = "";
    res.on("data", chunk => {
      data += chunk;
    });
    res.on('end', () => {
      expect(res.statusCode).toBe(200);
      expect(data).toBe('View page.');
      done();
    });
  });
})
});
*/
