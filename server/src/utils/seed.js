import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "432fdb9d-ac49-4dd4-b49f-eab40f56ee79"

let todos = [
  {
    "userId": userId,
    "text": "Finish writing project proposal",
    "category": "White",
    "completed": false
  },
  {
    "userId": userId,
    "text": "Buy groceries for the week",
    "category": "White",
    "completed": true
  },
  {
    "userId": userId,
    "text": "Schedule dentist appointment",
    "category": "White",
    "completed": false
  },
  {
    "userId": userId,
    "text": "Complete React course module",
    "category": "White",
    "completed": true
  },
  {
    "userId": userId,
    "text": "Clean and organize workspace",
    "category": "Red",
    "completed": false
  },
  {
    "userId": userId,
    "text": "Go for a 30-minute run",
    "category": "Red",
    "completed": true
  },
  {
    "userId": userId,
    "text": "Read 20 pages of a book",
    "category": "Red",
    "completed": false
  },
  {
    "userId": userId,
    "text": "Prepare presentation slides",
    "category": "Green",
    "completed": false
  },
  {
    "userId": userId,
    "text": "Green",
    "category": "Family",
    "completed": true
  },
  {
    "userId": userId,
    "text": "Fix bug in authentication flow",
    "category": "Green",
    "completed": false
  }
]

for (const todo of todos){
    await prisma.todo.create({
        data: todo
    });
    console.log("added todo")
}