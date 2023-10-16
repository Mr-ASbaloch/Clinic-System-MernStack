const express=require ("express")
const colors= require ("colors")
const morgan = require ("morgan")
const dotenv= require("dotenv")
const mongoDbConnection = require("./config/db")

const app =express()

// dotenv configer 

 dotenv.config()

 //db connection 

 mongoDbConnection()
 

// using middlewares


app.use(express.json())
app.use(morgan('dev'))

// creating routes 

app.use('/api/v1/user', require('./routes/userRoutes'))

// creating server 

//port 
const port=process.env.PORT 

// listen

app.listen(port,()=>{
    console.log(`server running at ${port} in ${process.env.NODE_MODE} mode`.bgBlue.black.bold);
})