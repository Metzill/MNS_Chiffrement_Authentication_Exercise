const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const argon2 = require("argon2");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Helper function to read users from the JSON file
const readUsersFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("credentials.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data).users);
      }
    });
  });
};

// Helper function to write users to the JSON file
const writeUsersToFile = (users) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "credentials.json",
      JSON.stringify({ users }, null, 2),
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
};

// Route to handle login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const users = await readUsersFromFile();
    const user = users.find((user) => user.username === username);
    if (user && (await argon2.verify(user.password, password))) {
      res.send("Login successful!");
    } else {
      res.status(401).send("Invalid username or password.");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Route to handle registration
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const users = await readUsersFromFile();
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      res.status(400).send("User already exists.");
      return;
    }
    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2id,
    });
    users.push({ username, password: hashedPassword });
    await writeUsersToFile(users);
    res.send("User registered successfully!");
  } catch (err) {
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
