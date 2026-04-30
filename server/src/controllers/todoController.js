import { prisma } from "../config/db.js";

const addTodo = async (req, res)=>{
    const {text, image, category, completed, userId} = req.body;

    // Vrify if category exists

    const isCategory = await prisma.category.findUnique({
        where: {categoryName : category}
    });

    if (!isCategory){res.status(404).json({message:"error : Category doesn't exist"})}

    // Vrify if todo already exists

    const isTodo = await prisma.todo.findUnique({
        where: {userId_text:{
            userId: userId,
            text:text
        }}
    });

    if (isTodo){res.status(400).json({message:"This todo item already exists"})};

    // add todo

    const todo = await prisma.todo.create({
        data : {
            userId,
            text,
            category,
            image: image || null,
            completed
        }
    });

    res.status(200).json({
        status: "success",
        data: {
            todo,
        }
    })

};

export { addTodo }