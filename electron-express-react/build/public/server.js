const express = require("express");
const cors = require("cors");
const sudo = require("sudo-prompt");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/vpn-start", (req, res) => {
  var options = {
    name: "Electron"
    // icns: "/Applications/Electron.app/Contents/Resources/Electron.icns" // (optional)
  };
  sudo.exec(
    req.body?.isConnected ? "ipsec up vpntest" : "ipsec down vpntest",
    options,
    function(error, stdout, stderr) {
      if (error) return res.status(400).send(error);
      console.log("stdout: " + stdout);
      return res.send(stdout);
    }
  );
});

app.listen(5000, () => console.log("App running on port 5000 🔥"));
