import express from "express"
import authRoutes from "./routes/auth.routes.js"
import dotenv from 'dotenv'
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // middleware to parse req.body
app.use(express.urlencoded({extended: true})); //to parse form data(url) bcz of this we can write payload in urlencoded except raw(json) in postman

app.use(cookieParser());

app.use("/api/auth", authRoutes);


// console.log(process.env.MONGO_URI)
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    connectMongoDB();
})