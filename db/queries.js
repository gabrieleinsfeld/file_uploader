const prisma = require("./prisma");

async function insertUser(first_name, last_name, username, hashedPassword) {
  await prisma.user.create({
    data: {
      firstName: first_name,
      lastName: last_name,
      email: username,
      password: hashedPassword,
    },
  });
  const user = await prisma.user.findUnique({
    where: { email: username },
  });
  console.log(user);
}

async function getUsername(username) {
  const user = await prisma.user.findUnique({
    where: { email: username },
  });
  return user;
}

async function createFolder(title, username) {
  await prisma.folder.create({
    data: {
      title: title,
      authorId: username,
    },
  });
}

async function getFoldersByUsername(username) {
  const folders = await prisma.user.findUnique({
    where: { email: username },
    include: { folders: true }, // Include the related folders
  });
  console.log(folders);
  return folders.folders;
}

async function deleteFolder(title) {
  await prisma.folder.delete({
    where: { title: title },
  });
}
async function updateFolder(title, newtitle) {
  try {
    // Update the record where the title matches the given value
    await prisma.folder.update({
      where: { title: title }, // Specify the unique identifier
      data: { title: newtitle }, // Provide the new data for the update
    });
  } catch (error) {
    console.error("Error updating record:", error);
  }
}

async function createFile(url, title) {
  try {
    const file = await prisma.file.create({
      data: {
        url: url,
        folderTitle: title,
      },
    });
    console.log(file);
  } catch (error) {
    console.log("Error creating file:", error);
  }
}

async function deleteImg(url) {
  await prisma.file.deleteMany({
    where: { url: url },
  });
}

module.exports = {
  getUsername,
  insertUser,
  createFolder,
  getFoldersByUsername,
  deleteFolder,
  updateFolder,
  createFile,
  deleteImg,
};
