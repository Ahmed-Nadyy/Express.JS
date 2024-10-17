// middleware is a regular function that can access the req and the res objects 
const express = require('express');
const app = express();
const auth = require('./auth');
const handler = require('./errorHandler');



//logger middleware 
const logger= (req, res, next)=>{
    const method = req.method;
    const path = req.path;
    const time = new Date();

    console.log(method, path, time);

    next();
};

app.get('/', logger, auth,(req, res)=>{
    res.send("logger test");
})

app.use(handler);
app.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});