const express = require('express');
const {AdminAuth,userAuth } = require('./middleWare/auth');

const app = express(); // this instance of the express

app.use('/admin',AdminAuth);

app.get('/admin/getAllData',(req,res) => {
    res.send('user details send');
});

app.get('/admin/delete',(req,res) => {    
    res.send('Deleted a userf ');
});

// for login no need authentication
app.get('/user/login', (req,res) => {    
    res.send('user logged in successfully');
});
app.get('/user/getUserDetails', userAuth, (req,res) => {    
    res.send('user api Deleted a userf ');
});

// server is running on 3000 port number
app.listen(3000,() => {
    // this call back function call when server has been started
    console.log('server is successfully started')
});