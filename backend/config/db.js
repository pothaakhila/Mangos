import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:8639604531@cluster0.yg1tkb3.mongodb.net/PROJECT4').then(()=>console.log("DB connected"));
}