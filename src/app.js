const express = require('express');

const app = express(); // this instance of the express

//this function know as request handler
// go to the browser http://localhost:3000/ you get the response on the web page
app.use('/test',(req, res) => {
    res.send('hello form the server');
});

app.use((req,res) => {
    res.send('not mentsion api call');
})


// server is running on 3000 port number
app.listen(3000,() => {
    // this call back function call when server has been started
    console.log('server is successfully started')
});