const express = require("express");
const multer = require("multer");
const passport = require("passport");

const userApi = require("./api");

const router = express.Router();

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

router.get("/users", async (req, res) => {
  try {
    let data = await userApi.getAllUsers();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router
  .route("/signup")
  .post(upload.single("myImage"), async (req, res, next) => {
    try {
      let user = await userApi.getUserByEmail(req.body.email);

      if (user) res.end("User already exists!!");
      else {
        let newUser = req.body;
        newUser.picture = req.file.filename;
        await userApi.addUser(newUser);
        res.end("Signup Successful!!!!");
      }
    } catch (err) {
      console.log(err);
    }
  })
  .get((req, res) => {
    res.sendFile(__dirname + "/public/signup.html");
  });

router
  .route("/login")
  .post(async (req, res) => {
    try {
      let user = await userApi.getUserByEmail(req.body.email);
      if (user) {
        let resultMarkup = markup.replace(
          "$welcomeNote$",
          `Welcome ${user.name.toUpperCase()}`
        );
        if (user.picture.includes("http")) {
          resultMarkup = resultMarkup.replace(
            "$displayPicture$",
            `${user.picture}`
          );
        } else {
          resultMarkup = resultMarkup.replace(
            "$displayPicture$",
            `/uploads/${user.picture}`
          );
        }
        res.end(resultMarkup);
      } else res.end("User or password doesnt match!!");
    } catch (err) {
      console.log(err);
    }
  })
  .get((req, res) => {
    res.sendFile(__dirname + "/public/login.html");
  });

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    // let resultMarkup = markup.replace(
    //   "$welcomeNote$",
    //   `Welcome ${user.name.toUpperCase()}`
    // );
    // if (user.picture.includes("http")) {
    //   resultMarkup = resultMarkup.replace(
    //     "$displayPicture$",
    //     `${user.picture}`
    //   );
    // } else {
    //   resultMarkup = resultMarkup.replace(
    //     "$displayPicture$",
    //     `/uploads/${user.picture}`
    //   );
    // }
    // res.end(resultMarkup);
    res.send("Logged In");
  }
);

module.exports = router;