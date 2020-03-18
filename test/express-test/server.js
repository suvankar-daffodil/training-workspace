const express = require("express");
const app = express();

const { exec, execSync } = require("child_process");

// execSync("sudo ls", { input: "1\n" });

exec("sudo ipsec down vpntest", { input: "1\n" }, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

app.listen(5000, () => console.log(`Server running at http://localhost:5000`));
