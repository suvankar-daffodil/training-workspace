const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20");
const userApi = require("./api");

const router = require("./router");

const app = express();
mongoose.connect("mongodb://localhost/mongooseTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: true
  })
);

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

        if (user) console.log("User already exixts...");
        else {
          await userApi.addUser({
            name: profileData.displayName,
            googleId: profileData.id,
            picture: profileData.photos[0].value
          });
        }
        done();
      } catch (err) {
        console.log(err);
      }
    }
  )
);

app.use(express.static("./public"));
app.use("/", router);

app.listen(5000, () => {
  console.log("Server running at http://127.0.0.1:5000");
});
