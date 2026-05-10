/*
  Warnings:

  - You are about to drop the column `category` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `categoryColor` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Category_categoryColor_key";

-- DropIndex
DROP INDEX "Category_categoryName_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "category",
ADD COLUMN     "categoryColor" "categoryColor" NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
