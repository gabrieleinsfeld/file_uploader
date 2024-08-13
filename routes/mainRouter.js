const { Router } = require("express");
const usersController = require("../controllers/userController");
const mainRouter = Router();
const passport = require("passport");

// Render the login page

mainRouter.get("/folder", (req, res) => {
  res.render("seeFolder", { folderTitle: undefined });
});
mainRouter.get("/log-in", (req, res) => {
  res.render("index");
});

mainRouter.get("/", (req, res) => {
  res.render("index");
});

// Handle login form submission
mainRouter.post(
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/folder",
    failureRedirect: "/log-in",
  })
);

mainRouter.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/log-in");
  });
});

mainRouter.get("/sign-up", usersController.signUpGet);
mainRouter.post("/sign-up", usersController.signUpPost);
mainRouter.get("/folder/:folderTitle", (req, res) => {
  res.render("seeFolder", { folderTitle: req.params.folderTitle });
});

module.exports = mainRouter;
