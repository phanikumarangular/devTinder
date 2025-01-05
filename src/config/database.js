// const clusterURL = 'mongodb+srv://leonatte143:zgaZRQYBfv0QSbTq@cluster0.ecya1.mongodb.net/?retryWrites=true&w=majority/devTinder'; // this url refers to the cluster.

const clusterURL = 'mongodb+srv://leonatte143:zgaZRQYBfv0QSbTq@cluster0.ecya1.mongodb.net/devTinder?retryWrites=true&w=majority';

const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(clusterURL);
} 

module.exports = {connectDB};