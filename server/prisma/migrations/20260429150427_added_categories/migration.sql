-- CreateEnum
CREATE TYPE "categoryColor" AS ENUM ('WHITE', 'GRAY', 'RED', 'ORANGE', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "categoryColor" "categoryColor" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
