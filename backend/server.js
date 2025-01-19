import express from "express"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import dotenv from 'dotenv'
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import {v2 as cloudinary} from 'cloudinary';
dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware to parse req.body
app.use(express.urlencoded({extended: true})); //to parse form data(url) bcz of this we can write payload in urlencoded except raw(json) in postman

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// console.log(process.env.MONGO_URI)
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})