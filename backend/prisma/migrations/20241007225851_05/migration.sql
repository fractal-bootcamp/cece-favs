/*
  Warnings:

  - You are about to drop the column `tagId` on the `Tag` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_tagId_fkey";

-- AlterTable
ALTER TABLE "Tag" DROP COLUMN "tagId",
ADD COLUMN     "genreId" TEXT;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;
