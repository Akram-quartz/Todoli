import { prisma } from "../config/db.js";

const addTodo = async (req, res)=>{
    const {text, categoryName, completed, categoryId, image} = req.body;

    // Vrify if category exists

    const isCategory = await prisma.category.findUnique({
        where : {
            userId_categoryName : {
                userId: req.user.id,
                categoryName: categoryName
            }
        }
    });

    if (!isCategory){res.status(404).json({message:"error : Category doesn't exist"})}

    // Vrify if todo already exists

    const isTodo = await prisma.todo.findUnique({
        where: {userId_text:{
            userId: req.user.id,
            text:text
        }}
    });

    if (isTodo){res.status(400).json({message:"This todo item already exists"})};

    // add todo

    const todo = await prisma.todo.create({
        data : {
            userId: req.user.id,
            text,
            categoryName,
            image: null,
            categoryId
        }
    });

    res.status(200).json({
        status: "success",
        data: {
            todo,
        }
    })

};

const removeTodo = async (req, res)=>{

    // get todo

    const todo = await prisma.todo.findUnique({
        where : {
            id: req.params.id
        }
    });

    // check if todo exists

    if (!todo){return res.status(401).json({error: "item does not exist"})};

    // check if owner is correct

    if (todo.userId !== req.user.id){return res.status(401).json({error: "Not authorized to do this operation"})};

    // delete todo 

    await prisma.todo.delete({
        where : {
            id: req.params.id
        }
    });

    res.status(200).json({
        status: "success"
    })
}

const getTodo = async (req, res)=>{

    // get todos

    const data = await prisma.todo.findMany({
        where : {
            userId: req.user.id
        }
    })

    if (!data){return res.status(401).json({error: "No data"})};

    console.log("hello")

    res.status(200).json({data: data})

}

export { addTodo, removeTodo, getTodo }