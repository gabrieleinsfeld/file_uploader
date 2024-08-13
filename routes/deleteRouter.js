const { Router } = require("express");
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");
const deleteRouter = Router();

// Render the login page

deleteRouter.get("/folder", (req, res) => {
  res.render("index");
});
deleteRouter.post("/folder", folderController.deleteFolder);
deleteRouter.post("/img", fileController.deleteImg);
module.exports = deleteRouter;
