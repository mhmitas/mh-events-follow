import { model, models, Schema } from "mongoose";

const EventSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },
        location: { type: String },
        startDateTime: { type: Date, default: Date.now() },
        endDateTime: { type: Date, default: Date.now() },
        price: { type: Number },
        isFree: { type: Boolean, default: false },
        url: { type: string },
        category: { type: Schema.Types.ObjectId, ref: "Category" },
        organizer: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
)

export const Event = models.Event || model('Event', EventSchema)