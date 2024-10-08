/*
  Warnings:

  - You are about to drop the column `category` on the `Genres` table. All the data in the column will be lost.
  - You are about to drop the column `genreId` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_genreId_fkey";

-- AlterTable
ALTER TABLE "Genres" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "genreId",
DROP COLUMN "title";

-- CreateTable
CREATE TABLE "_GenresToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenresToTag_AB_unique" ON "_GenresToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_GenresToTag_B_index" ON "_GenresToTag"("B");

-- AddForeignKey
ALTER TABLE "_GenresToTag" ADD CONSTRAINT "_GenresToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenresToTag" ADD CONSTRAINT "_GenresToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
