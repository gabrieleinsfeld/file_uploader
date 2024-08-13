/*
  Warnings:

  - Added the required column `title` to the `Folder` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Folder" DROP CONSTRAINT "Folder_authorId_fkey";

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "title" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
