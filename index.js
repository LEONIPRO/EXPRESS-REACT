// import express into our file
const express = require('express')

// create a new express application
const app = express()

// define the port our server will run on
const port = 3000

// allow static assets in public folder

app.use(express.static('public'))


// define our server routes
app.get('/test', (req, res) =>{


    // send back a response to the client through Test
    res.send(('Server is operational!!'))
})

app.get('/message', (req, res)=>{
    // do something when the server processes this request

    // send back a response to the client
    res.send("Hello from our server!")
})



// run our server to listen at the port we defined

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})