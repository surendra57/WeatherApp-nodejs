const express = require('express')

const https = require('https')

const weatherRouter = express.Router()

weatherRouter.get("/",(req,res)=>{

    res.sendFile(__dirname,+ "index.html" )
})


weatherRouter.get('/',(req,res)=>{


    const city = "delhi"
    console.log(city)
    const apiKey = "d21ab5c6f09ec395e25778e25e22a0a4"
    const unit = "100"

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid="+apiKey+"&units="+unit+""

    https.get(url,(response)=>{
        response.on("data", (chunk)=>{
            const responseData = JSON.parse(chunk);
            console.log(responseData)
            const temperature = responseData.main.temp;
            const weatherDes = responseData.weather[0].description;
            const icon = responseData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn/"+ icon + "@2x.png";
            const cityName = responseData.name;
            res.write(`&lt;h1&gt;The weather is ${temperature} degree celsius in ${cityName} and the description is ${weatherDes} &lt;/h1&gt;`)
            res.write("&lt;img src="+ imageURL +"&gt;")
            res.send("hello")
        })
    })

})

module.exports= weatherRouter