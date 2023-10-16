const express=require ("express")
const colors= require ("colors")
const morgan = require ("morgan")
const dotenv= require("dotenv")

const app =express()

// dotenv configer 

 dotenv.config()


// using middlewares

app.use(express.json())
app.use(morgan('dev'))

// creating routes 

app.get('/', (req, res)=>{
 res.send('app running')
})

// creating server 

//port 
const port=process.env.PORT 

// listen

app.listen(port,()=>{
    console.log(`server running at ${port} in ${process.env.NODE_MODE} mode`.bgBlue.black.bold);
})