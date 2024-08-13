const db = require("../db/queries");
async function addFolder(req, res) {
  //   await db.getFoldersByUsername(req.body.username);
  await db.createFolder(req.body.title, req.body.username);
  res.redirect("/folder");
}

async function deleteFolder(req, res) {
  await db.deleteFolder(req.body.title);
  res.redirect("/folder");
}

async function updateFolder(req, res) {
  await db.updateFolder(req.body.title, req.body.newTitle);
  res.redirect("/folder");
}
module.exports = { addFolder, deleteFolder, updateFolder };
