const express = require('express')
const  bodyParser = require('body-parser')

const PORT = 5000;
const HostName ="localhost"

const aboutRouter = require("./routes/about");
const weatherRouter = require("./routes/weather");

const app =express()
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: true}));

app.use("/weather",weatherRouter)
app.use("/about",aboutRouter)



app.listen(PORT,HostName,()=>{

    console.log(`server is Running on ${HostName}:${PORT}`)

})