/*
  Warnings:

  - You are about to drop the column `genreId` on the `Genre` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Genre" DROP CONSTRAINT "Genre_genreId_fkey";

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "genreId";

-- CreateTable
CREATE TABLE "_GenreToPicture" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_GenreToPicture_AB_unique" ON "_GenreToPicture"("A", "B");

-- CreateIndex
CREATE INDEX "_GenreToPicture_B_index" ON "_GenreToPicture"("B");

-- AddForeignKey
ALTER TABLE "_GenreToPicture" ADD CONSTRAINT "_GenreToPicture_A_fkey" FOREIGN KEY ("A") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenreToPicture" ADD CONSTRAINT "_GenreToPicture_B_fkey" FOREIGN KEY ("B") REFERENCES "Picture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
