const express = require('express');
const productRouter = express.Router();
const data = require('../data');


productRouter.get('/products', (req, res) => {
    console.log('GET /products called');
    res.json(data.products);
});

productRouter.get('/products/:id', (req, res) => {
    const id = (req.params.id);
    console.log(`GET /products/${id}`);
    const item = data.products.find(product => product.id === Number(id));
    if (item){
    res.json(item);
    }else{
        res.send('product not found');
    }
});

productRouter.post('/list-item', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('Item received');
});


module.exports = productRouter;