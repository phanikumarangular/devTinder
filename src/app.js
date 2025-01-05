const express = require('express');
const {connectDB} =  require('./config/database');
const User = require('./Models/user');
const app = express(); // this instance of the express

app.post('/signup',async (req, res) => {
    const userObj = {
        firstName : "Phani",
        lastName : "Natte",
        emailId : "phani@gmail.com",
        password: "Namaste@123" 
    }

    
    // Creating a new instance of the user Model
    const user = new User(userObj); //// trying create new using with userObj
    try{
        await user.save();
        res.send('User added successfully')
    } catch(err){
        
    }
    

});

connectDB().then(() => {
    console.log('database connected successfully');
    // server is running on 3000 port number
    app.listen(7777,() => {
        // this call back function call when server has been started
        console.log('server is successfully started')
    });
}).catch((error) => {
    console.error('database not connected ');
})
