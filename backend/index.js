const express = require('express')
const app =express()
const noteRoute=require('./routes/noteRoute')

app.use(express.json())
app.use(express.urlencoded({extended: true}));
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
}


app.use(allowCrossDomain)
app.use('/notes',noteRoute)






app.use('/',(req,res)=>{res.status(200).send({data:"server is responding"})})

app.listen(5000,()=>{
console.log('server started at 5000')
})
