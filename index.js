const express = require('express')
const mysqlPool = require('./db')
const app = express()
const port = 8080
const db = require('./db')
require('express-async-errors')

const transactionRoutes  = require('./controllers/transactions.controller')

app.use(express.json())
app.use('/api/transactions',transactionRoutes)
//global error handler
app.use((err,req,res,next)=>{
    if(err){
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end("Something went wrong!");
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('success ....')
    }
})

db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(port,
            () => console.log(`Server started running at port : ${port}`))
    })
    .catch(err => console.log('db connection failed. ' + err))

