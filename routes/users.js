const { response } = require("express");
let express = require("express");
let router = express.Router();
let userHelpers = require("../helpers/user-helpers");
const async = require("hbs/lib/async");

router.get("/", function (req, res, next) {

  res.render("user/home", {
    layout: "home-layout",


  });

});

router.get("/userList", function (req, res, next) {
  userHelpers.getAllUsers().then((userdetails) => {
    res.render("user/userList", {
      userdetails,
      layout: "home-layout",


    })
  })
});




router.post("/register", (req, res) => {
  req.session.body = req.body;
  userHelpers.addUserData(req.body).then((data) => {
    if (data) {
      res.redirect("/");
    }
  });
})





module.exports = router;
