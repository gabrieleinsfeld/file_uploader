const { Router } = require("express");
const folderController = require("../controllers/folderController");
const updateRouter = Router();

// Render the login page

updateRouter.get("/folder/:title", (req, res) => {
  res.render("updateFolder", {
    currentTitle: req.params.title,
  });
});
updateRouter.post("/folder", folderController.updateFolder);

module.exports = updateRouter;
