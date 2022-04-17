const express = require("express"),
  robot = require("robotjs"),
  ip = require("ip"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.json());
app.use("/", express.static("tv"));
app.use("/remote", express.static("remote"));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
var ipAddress = ip.address().split("") + `:${port}`;

app.post("/remote/api", async (req, res) => {
  var direction = req.body.direction;
  if (direction === "left") {
    robot.keyTap("left");
    res.json({ message: "Sent left direction" });
  } else if (direction === "right") {
    robot.keyTap("right");
    res.json({ message: "Sent right direction" });
  } else if (direction === "ok") {
    robot.keyTap("enter");
    res.json({ message: "Sent enter direction" });
  } else if (direction === "home") {
    if (process.platform === "darwin") {
      robot.keyTap("l", "command");
    } else if (process.platform === "win32") {
      robot.keyTap("f6");
    }
    for (let i = 0; i < ipAddress.length; i++) {
      const string = ipAddress[i];
      if (string === ".") {
        robot.typeString(".");
      } else if (string !== ","){
        robot.keyTap(string);
      }
      await sleep(100);
    }
    robot.keyTap("enter");
    res.json({ message: "Sent home direction" });
  }
});

app.listen(port, () => {
  console.log(`[TV-Interface] ${port}`);
});
