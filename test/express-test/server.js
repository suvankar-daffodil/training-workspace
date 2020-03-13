const express = require("express");
const app = express();

const { exec } = require("child_process");

exec("sudo -i", (error, stdout, stderr) => {
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
