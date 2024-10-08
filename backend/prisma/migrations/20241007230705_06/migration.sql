/*
  Warnings:

  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_GenreToPicture` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_genreId_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToPicture" DROP CONSTRAINT "_GenreToPicture_A_fkey";

-- DropForeignKey
ALTER TABLE "_GenreToPicture" DROP CONSTRAINT "_GenreToPicture_B_fkey";

-- DropTable
DROP TABLE "Genre";

-- DropTable
DROP TABLE "_GenreToPicture";

-- CreateTable
CREATE TABLE "Genres" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_GenresToPicture" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Genres_name_key" ON "Genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_GenresToPicture_AB_unique" ON "_GenresToPicture"("A", "B");

-- CreateIndex
CREATE INDEX "_GenresToPicture_B_index" ON "_GenresToPicture"("B");

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenresToPicture" ADD CONSTRAINT "_GenresToPicture_A_fkey" FOREIGN KEY ("A") REFERENCES "Genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GenresToPicture" ADD CONSTRAINT "_GenresToPicture_B_fkey" FOREIGN KEY ("B") REFERENCES "Picture"("id") ON DELETE CASCADE ON UPDATE CASCADE;
