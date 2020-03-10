const express = require("express");
const multer = require("multer");
const passport = require("passport");

const userApi = require("../controllers/api");

const router = express.Router();

const upload = multer({ dest: "./public/uploads/" });
const upload2 = multer({ dest: "./public/assets/" });

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
  .post(async (req, res, next) => {
    try {
      let user = await userApi.getUserByEmail(req.body.email);
      if (user) res.end(null);
      else {
        let newUser = req.body;
        let result = await userApi.addUser(newUser);
        res.json(result);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  })
  .get((req, res) => {
    res.sendFile(__dirname + "/public/signup.html");
  });

router
  .route("/login")
  .post(async (req, res, next) => {
    try {
      let user = await userApi.getUserByEmail(req.body.email);
      if (user) {
        req.user = user;
        res.json(user);
      } else res.end(user);
    } catch (err) {
      console.log(err);
    }
  })
  .get((req, res) => {
    res.sendFile(__dirname + "/public/login.html");
  });

router
  .route("/posts")
  .post(upload.single("image"), async (req, res) => {
    try {
      let post = req.body;
      post.picture = req.file.filename;
      let result = await userApi.addPost(post);
      res.json(result);
    } catch (err) {
      console.log(err);
    }
  })
  .get(async (req, res) => {
    try {
      let data = await userApi.getAllPosts();
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  });

router.route("/posts/:postId").put(async (req, res) => {
  try {
    if (req.body.body) {
      let comment = {
        name: req.body.user.firstname + " " + req.body.user.lastname,
        picture: req.body.user.picture,
        body: req.body.body
      };
      let result = await userApi.updateComment(req.params.postId, comment);
      res.json(result);
    } else {
      let result = await userApi.updateLike(req.params.postId, req.body.user);
      res.json(result);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.route("/categories").post(upload2.single("image"), async (req, res) => {
  try {
    let data = [{ name: req.body.category, picture: req.file.filename }];
    let result = await userApi.addCategory(req.body.user, data);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req, res, next) => {
    return next();
  }
);

function playGame(req, res) {
  return res.sendFile(__dirname + "/public/game/snakesAndLadders.html");
}

module.exports = router;
