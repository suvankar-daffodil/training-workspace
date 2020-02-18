const express = require("express");

// const openvpnmanager = require("node-openvpn");

const app = express();

// const opts = {
//   // host: "VPN-LB-55f6bf77beeebe72.elb.us-east-1.amazonaws.com", // normally '127.0.0.1', will default to if undefined
//   // port: 443, //port openvpn management console
//   // timeout: 1500, //timeout for connection - optional, will default to 1500ms if undefined
//   config: "./sample.ovpn"
// };
// const auth = {
//   user: "113aeb45329ad34ccada",
//   pass: "5c5bdd03ce382"
// };

// // {
// //   "username": "113aeb45329ad34ccada",
// //   "password": "5c5bdd03ce382",
// //   "serverAddress": "VPN-LB-55f6bf77beeebe72.elb.us-east-1.amazonaws.com",
// //   "port": 443
// // }

// const openvpn = openvpnmanager.connect(opts);

// // will be emited on successful interfacing with openvpn instance
// openvpn.on("connected", () => {
//   console.log("connected");
//   openvpnmanager.authorize(auth);
// });

// // emits console output of openvpn instance as a string
// openvpn.on("console-output", output => {
//   console.log(output);
// });

// // emits console output of openvpn state as a array
// openvpn.on("state-change", state => {
//   console.log(state);
// });

// // emits console output of openvpn state as a string
// openvpn.on("error", error => {
//   console.log(error);
// });

// // get all console logs up to this point
// // openvpnmanager.getLog(console.log);

// // and finally when/if you want to
// // openvpnmanager.disconnect();

// // emits on disconnect
// openvpn.on("disconnected", () => {
//   // finally destroy the disconnected manager
//   openvpnmanager.destroy();
//   console.log("disconnected");
// });

var openvpnmanager = require("node-openvpn");
var openvpnBin = require("openvpn-bin");
var path = require("path");

openvpnBin
  .initialize("openvpn", {
    // host: "VPN-LB-55f6bf77beeebe72.elb.us-east-1.amazonaws.com",
    // port: 443,
    config: path.normalize("./sample.ovpn")
  })
  .then(function() {
    var managerInstance = openvpnmanager.connect({
      host: "VPN-LB-55f6bf77beeebe72.elb.us-east-1.amazonaws.com",
      port: 443
    });

    managerInstance.on("connected", function() {
      managerInstance.authorize({
        user: "113aeb45329ad34ccada",
        pass: "5c5bdd03ce382"
      });
    });

    managerInstance.on("console-output", function(output) {
      console.log(output);
    });
  });

app.listen(5000, () => console.log(`Server running at http://localhost:5000`));
