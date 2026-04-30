import { prisma } from "../config/db.js";

const addCategory = async (req, res) => {
    const {userId, categoryName, categoryColor} = req.body;

    // check if category already exists

    const isCategoryWhole = await prisma.category.findUnique({
        where : {categoryColor_categoryName : {
            categoryColor: categoryColor,
            categoryName: categoryName
        }}
    });

    const isCategoryName = await prisma.category.findUnique({
        where : {
            categoryName:categoryName,
        }
    });

    const isCategoryColor = await prisma.category.findUnique({
        where : {
            categoryColor:categoryColor,
        }
    });

    if (isCategoryWhole||isCategoryName||isCategoryColor){res.status(400).json({message:"This category already exists"})};

    const newCategory = await prisma.category.create({
        data : {
            userId,
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

export { addCategory }