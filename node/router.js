const express = require("express");
const multer = require("multer");

const userModel = require("./model");

const router = express.Router();

let users;

const markup = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <style>
      * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        height: 80%;
        width: 50%;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }

      .displayPicture {
        margin: 10%;
        height: 50%;
        width: 50%;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1 class="welcomeNote">$welcomeNote$</h1>
      <img class="displayPicture" src="$displayPicture$"/>
    </div>
  </body>
</html>`;

const upload = multer({ dest: "./public/uploads/" });

router.get("/users", (req, res) => {
  userModel.find({}, (err, data) => {
    users = data;
    res.json(users);
  });
});

router
  .route("/signup")
  .post(upload.single("myImage"), (req, res, next) => {
    let newUser = req.body;
    newUser.picture = req.file.filename;

    userModel.find({}, (err, data) => {
      users = data;
      if (users === undefined)
        userModel.create(newUser, (err, result) => {
          if (err) console.log("errr", err);
          res.end("Signup Successful!!!!");
        });
      else
        for (let user of users) {
          if (user.email === newUser.email || user.phone === newUser.phone) {
            res.end("User already exists!!");
          } else
            userModel.create(newUser, (err, result) => {
              if (err) console.log("errr", err);
              res.end("Signup Successful!!!!");
            });
        }
    });
  })
  .get((req, res) => {
    res.sendFile(__dirname + "/public/signup.html");
  });

router
  .route("/login")
  .post((req, res) => {
    userModel.find({}, (err, data) => {
      users = data;
      for (let user of users) {
        if (
          user.email === req.body.email &&
          user.password === req.body.password
        ) {
          let resultMarkup = markup.replace(
            "$welcomeNote$",
            `Welcome ${user.name}`
          );
          resultMarkup = resultMarkup.replace(
            "$displayPicture$",
            `/uploads/${user.picture}`
          );
          return res.end(resultMarkup);
        }
      }
      res.end("User or password doesnt match!!");
    });
  })
  .get((req, res) => {
    res.sendFile(__dirname + "/public/login.html");
  });

module.exports = router;
