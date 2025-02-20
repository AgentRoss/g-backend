// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
  path: './env'
})





connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=> {
    console.log(`Server is running at Port: ${process.env.PORT}`)
  })
})
.error((err)=> {
  console.log("Mongodb connection is failed!!", err)
})