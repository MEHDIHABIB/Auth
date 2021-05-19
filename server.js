const express = require('express') ;
const connectDB = require('./config/connectDB');
const app = express();
app.use(express.json());

const authRoute = require('./route/auth');

const port = process.env.Port || 5000 ;


connectDB()

app.use('/api/auth', authRoute) ;
app.listen(port, (err)=> {
    err ? console.log(err) : console.log(`The server is runnin on port ${port}`)
}) ;



