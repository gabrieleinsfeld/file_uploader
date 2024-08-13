-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "folderTitle" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_folderTitle_fkey" FOREIGN KEY ("folderTitle") REFERENCES "Folder"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
