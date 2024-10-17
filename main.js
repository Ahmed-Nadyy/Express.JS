const express = require('express');
const app = express();
const productRouter = require('./routers/poductRouter');
const staticRouter = require('./routers/staticRouter');

// pasres req body using middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello its my first express');
    });

app.get('/home' ,(req, res)=>{
   res.send('Welcome to my Home page');
});

app.post('/list-item',(req, res)=>{
   const body = req.body;
   console.log(body); 
});

app.use('/',productRouter);
app.use('/',staticRouter);

app.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});