"use server"

import { connectDB } from "../database/db"
import { Category } from "../database/models/category.model"
import { handleError } from "../utils"

export const createCategory = async ({ categoryName }) => {
    console.log(categoryName)
    try {
        await connectDB()

        const newCategory = await Category.create({ name: categoryName })
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error)
    }
}

export const getAllCategories = async () => {
    try {
        await connectDB()

        const categories = await Category.find()
        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        handleError(error)
    }
}