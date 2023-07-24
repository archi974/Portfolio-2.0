import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWD}@${process.env.DB_CLUSTER}.mongodb.net/book-notation?retryWrites=true&w=majority`)
.then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("MongoDB connection error:", error);
})

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD')
    next();
})

app.use(express.json());

// Ajoutez ici vos middlewares, routes, etc.

export default app;
