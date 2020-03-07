const express = require("express");
const app = express();

const openvpnmanager = require("node-openvpn");

const opts = {
  host: "ipsecbrazil.whitelabel.com.br",
  port: 500,
  timeout: 1500, //timeout for connection - optional, will default to 1500ms if undefined
  logpath: "log.txt" //optional write openvpn console output to file, can be relative path or absolute
};
const auth = {
  user: "TestCompressUserDevice",
  pass: "5e5cd7c743546"
};
const openvpn = openvpnmanager.connect(opts);

openvpn.on("connected", () => {
  console.log("Connected to VPN successfully...");
});

openvpn.on("error", () => {
  console.log("Cannot connect");
});

app.listen(5000, () => console.log(`Server running at http://localhost:5000`));
