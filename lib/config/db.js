import mongoose from "mongoose";

export const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect("mongodb+srv://murtazaabdullah989:DqdZ5YpBRwqmMAoW@neurostatic.35fxrr8.mongodb.net/", {
            dbName: "blog-app",             
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            connectTimeoutMS: 30000,
            maxPoolSize: 10,
            retryWrites: true,
            retryReads: true
        });
        console.log("Connected to blog-app DB");
    }
};
