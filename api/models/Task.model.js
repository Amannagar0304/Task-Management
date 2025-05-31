import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title: {
        type: String,
        requried: true,
    },
    description: {
        type: String,
        requires: true, 
    },
    status: {
        type: String,
        requried: true,
        default: 'Pending',
        enum:['Pending', 'Completed','Failed'],
    }
}, { timestamps: true })

const TaskModel = new mongoose.model('Task', TaskSchema, 'tasks')
export default TaskModel