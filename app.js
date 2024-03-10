const express = require('express')
const app = express()
const userRoute = require('./api/routers/users')
//JSON meddilewire 
app.use(express.json())
/*
app.use((req, res, next) =>{
    res.status(200).json({
        message : "It Works"
    })
})
*/
app.get('/',(req, res, next) =>{
    res.status(200).json({
        message : "Node API "
    })
})
app.use('/users', userRoute)
app.use('/*',(req, res)=>{
   // res.status(404).sendFile(path.join(__dirname,'404.html'))
   //res.render("404")
   res.status(404).json({message : "Resourse not found"})
  })  

module.exports = app