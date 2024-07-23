import cors from "cors"
import express from "express"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"






//app config
const app=express()

const port=4000


//middleware use this middleware when evr you get request from the frontend to backend that is the part of the json


app.use(express.json())
//access the backend from frontend
app.use(cors())
 

//db connection
connectDB();


//API ENDPOINTS create foodroute

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)





//api endpoints



//initialize after you have that get method is http method request from the server here give the path where you want to be run
app.get("/", (req,res)=>{
    res.send("API Working")//this is display
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

