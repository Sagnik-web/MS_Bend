const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const todoRouter = require('./Todo.Router')
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/todo',todoRouter)




const db = process.env.DB_URL
// console.log(db);
mongoose.connect(db)
.then(()=>{
    console.log('Databse Connected Successfully.');
})
.catch(err=>{
    console.log(`Error: ${err}`);
})


const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`);
})