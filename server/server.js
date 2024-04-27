const connect_to_database = require('./lib/connectDB')
const app = require('./app')
const PORT = process.env.PORT 

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./.env",
    })
}


const server = app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
    connect_to_database()
})