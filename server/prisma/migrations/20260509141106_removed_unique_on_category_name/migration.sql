/*
  Warnings:

  - A unique constraint covering the columns `[userId,categoryName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Category_categoryName_key";

-- CreateIndex
CREATE UNIQUE INDEX "Category_userId_categoryName_key" ON "Category"("userId", "categoryName");
