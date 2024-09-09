import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
    {
        clerkId: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        username: { type: String },
        firstName: { type: String, required: true },
        lastName: { type: String },
        photo: { type: String, required: true }
    },
    { timestamps: true }
)

export const User = models.User || model('User', userSchema)