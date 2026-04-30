/*
  Warnings:

  - A unique constraint covering the columns `[userId,text]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Todo_userId_text_key" ON "Todo"("userId", "text");
