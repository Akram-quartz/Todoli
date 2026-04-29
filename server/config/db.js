import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
    log: process.env.NODE_ENV === "developement" ? ["query","error","warn"]
    : ["error"],
})

const connectDB = async () => {
    try {
        await prisma.$connnect()
        console.log("DB connected via prisma");
        
    } catch (error) {
        console.error(`DB connection error : ${error}`);
    }
}

const disconnectDB = async () => {
    await prisma.$disconnnect()
}

export {prisma, connectDB, disconnectDB}