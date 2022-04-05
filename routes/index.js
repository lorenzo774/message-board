var express = require("express");
var router = express.Router();

const messages = [];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Messages app", messages: messages });
});

/* GET new page */
router.get("/new", function (req, res, next) {
  res.render("new");
});

/* POST new page */
router.post("/new", function (req, res, next) {
  const msgText = req.body.messageText;
  const username = req.body.messageUser;

  if (!msgText || !username) return;

  const date = new Date();
  const msg = {
    text: msgText,
    user: username,
    added: `${date.getHours()}:${date.getMinutes()}   ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`,
  };

  messages.push(msg);
  res.redirect("/");
});

module.exports = router;
