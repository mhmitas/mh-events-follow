import mongoose, { model, models } from "mongoose"
import { Schema } from "mongoose"

const CategorySchema = new Schema(
    {
        name: { type: String, required: true, unique: true }
    }
)

export const Category = models.Category || model('Category', CategorySchema)