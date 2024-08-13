const cloudinary = require("cloudinary").v2;
const db = require("../db/queries");

(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
})();
const multer = require("multer");
const fs = require("fs"); // Required to remove the file after uploading

const upload = multer({ dest: "../uploads" }); // Temporary storage directory
async function uploadFile(req, res, next) {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      overwrite: true,
    });
    // Optionally remove the local file after uploading
    fs.unlinkSync(req.file.path);

    const autoCropUrl = cloudinary.url(result.public_id, {
      crop: "auto",
      gravity: "auto",
      width: 500,
      height: 500,
    });
    db.createFile(autoCropUrl, req.body.folderTitle);
    console.log(autoCropUrl);

    res.redirect("/folder");
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    res.status(500).json({ success: false, message: "Upload failed" });
  }
}
async function deleteImg(req, res) {
  await db.deleteImg(req.body.url);
  res.redirect("/folder");
}
module.exports = { uploadFile, deleteImg };
