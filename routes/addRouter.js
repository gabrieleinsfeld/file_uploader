const { Router } = require("express");
const folderController = require("../controllers/folderController");
const fileController = require("../controllers/fileController");
const addRouter = Router();
const multer = require("multer");
const upload = multer({ dest: "../uploads" }); // Temporary storage directory

// Render the login page

addRouter.get("/folder", (req, res) => {
  res.render("newFolder");
});
addRouter.post("/folder", folderController.addFolder);
addRouter.post("/file", upload.single("newFile"), fileController.uploadFile);

module.exports = addRouter;
