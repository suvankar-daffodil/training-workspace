const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const cors = require("cors");

const userApi = require("./api");
const router = require("./router");

const app = express();
mongoose.connect("mongodb://192.168.100.171/mongooseTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(function(req, res, next) {
  console.log("HIT HIT");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// app.use(cors());

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["thisismykey"]
  })
);

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser(async (userGoogleId, done) => {
  let user = await userApi.getUserByGoogleId(userGoogleId);
  done(null, user);
});

passport.use(
  new googleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID:
        "716280916742-897gltk8ssnr8r7seu99v06pt4saj8a6.apps.googleusercontent.com",
      clientSecret: "ygM74nRSiwkLio0NIDOwvQ1n"
    },
    async (accessToken, refreshToken, profileData, done) => {
      try {
        let user = await userApi.getUserByGoogleId(profileData.id);

        if (!user) {
          let newUser = {
            name: profileData.displayName,
            email: profileData.emails[0].value,
            googleId: profileData.id,
            picture: profileData.photos[0].value
          };
          let insertedUser = await userApi.addUser(newUser);
          done(null, insertedUser);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);

app.use(passport.initialize(), passport.session());

app.use(express.static("./public"));
app.use("/", router);

app.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000");
});
