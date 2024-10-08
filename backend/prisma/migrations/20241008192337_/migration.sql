/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Picture` table. All the data in the column will be lost.
  - Added the required column `imageName` to the `Picture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Picture" ADD COLUMN "imageName" TEXT;

-- UpdateData
UPDATE "Picture" SET "imageName" = 'default.jpg' WHERE "imageName" IS NULL;

-- AlterTable
ALTER TABLE "Picture" ALTER COLUMN "imageName" SET NOT NULL;