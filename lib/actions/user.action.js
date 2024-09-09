'use server'

import { connectDB } from "../database/db"
import { Event } from "../database/models/event.model"
import { Order } from "../database/models/order.model"
import { User } from "../database/models/user.model"
import { handleError } from "../utils"

// =================
export const createUser = async (user) => {
    try {
        await connectDB()

        const newUser = User.create(user)

        return JSON.parse(JSON.stringify(newUser)); // to get a object, not mongodb obj
    } catch (error) {
        handleError(error)
    }
}

// =================
export async function getUserById(userId) {
    try {
        await connectDB()

        const user = await User.findById(userId)

        if (!user) {
            throw new Error("User not found")
        }

        return JSON.parse(JSON.stringify(user))
    } catch (error) {
        handleError(error)
    }
}

// =================
export async function updateUser(id, updatedUser) {
    try {
        await connectDB()

        const updateResult = await User.findOneAndUpdate({ clerkId: id }, updatedUser, { new: true })

        return JSON.parse(JSON.stringify(updateResult))

    } catch (error) {
        handleError(error)
    }
}

// =================
export async function deleteUser(clerkId) {
    try {
        await connectDB()

        // Find user to delete
        const userToDelete = await User.findOne({ clerkId })

        if (!userToDelete) {
            throw new Error('User not found')
        }

        // Unlink relationships
        await Promise.all([
            // Update the 'events' collection to remove references to the user
            Event.updateMany(
                { _id: { $in: userToDelete.events } },
                { $pull: { organizer: userToDelete._id } }
            ),

            // Update the 'orders' collection to remove references to the user
            Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
        ])

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
        handleError(error)
    }
}