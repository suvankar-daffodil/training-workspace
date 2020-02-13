// const fs = require("fs");
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// let users;

// fs.readFile("./users.json", (err, data) => {
//   if (err) {
//     console.log("Error reading file...");
//   } else {
//     users = JSON.parse(data);
//   }
// });

// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true
//   })
// );

// app.get("/", (req, res) => {
//   res.send(
//     "<h3>Visit /users to see user list and /users/{id} to get individual user.</h3>"
//   );
// });

// app
//   .route("/users")
//   .get((req, res) => {
//     res.end(JSON.stringify(users, null, 4));
//   })
//   .post((req, res) => {
//     let newUser = req.body;
//     users[`user${newUser.id}`] = newUser;
//     fs.writeFile("users.json", JSON.stringify(users), err => {
//       if (err) throw err;
//       res.end(JSON.stringify(newUser));
//     });
//   });

// app
//   .route("/users/:id")
//   .get((req, res) => {
//     res.end(JSON.stringify(users[`user${req.params.id}`], null, 4));
//   })
//   .put((req, res) => {
//     let updatedUser = req.body;
//     users[`user${req.params.id}`] = updatedUser;
//     fs.writeFile("users.json", JSON.stringify(users), err => {
//       if (err) throw err;
//       res.end(JSON.stringify(users));
//     });
//   })
//   .delete((req, res) => {
//     delete users[`user${req.params.id}`];
//     fs.writeFile("users.json", JSON.stringify(users), err => {
//       if (err) throw err;
//       res.end(JSON.stringify(users));
//     });
//   });

// app.listen(5000, () => console.log(`Server running at http://localhost:5000`));

const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES WILL GO HERE
app.get("/", function(req, res) {
  res.json({ message: "WELCOME" });
});

app.listen(3000, () => console.log("Server started on port 3000"));
