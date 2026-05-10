import { prisma } from "../config/db.js";


const getCategory = async (req, res)=>{

    // get category

    const data = await prisma.category.findMany({
        where : {
            userId: req.user.id
        }
    });

    if (!data){return res.status(401).json({error: "No data"})};

    res.status(200).json({data: data})
}

const addCategory = async (req, res) => {
    const {categoryName, categoryColor} = req.body;

    // check if category already exists

    const isCategoryWhole = await prisma.category.findUnique({
        where : {
            userId_categoryName : {
                userId: req.user.id,
                categoryName: categoryName
            }
        }
    });

    if (isCategoryWhole){res.status(400).json({message:"This category already exists"})};
    
    const newCategory = await prisma.category.create({
        data : {
            userId: req.user.id,
            categoryColor,
            categoryName
        }
    });

    res.status(201).json({
        status: "success",
        data: {
            newCategory,
        }
    })
}

const removeCategory = async (req, res)=>{

    // get category

    const category = await prisma.category.findUnique({
        where : {
            id: req.params.id
        }
    });

    // check if Category exists

    if (!category){return res.status(401).json({error: "item does not exist"})};

    // check if owner is correct

    if (category.userId !== req.user.id){return res.status(401).json({error: "Not authorized to do this operation"})};

    // delete Category 

    await prisma.category.delete({
        where : {
            id: req.params.id
        }
    });

    // delete todos of category

    await prisma.todo.deleteMany({
        where : {
            category: category.categoryName
        }
    });

    res.status(200).json({
        status: "success"
    })
}

export { addCategory, removeCategory, getCategory }