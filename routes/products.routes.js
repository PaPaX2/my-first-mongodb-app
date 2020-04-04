const express = require('express');
const router = express.Router();

const ProductMethod = require('../methods/product.method');

router.get('/products', ProductMethod.getAll);

router.get('/products/:id', ProductMethod.getById);

router.get('/products/random', ProductMethod.getRandom);

router.post('/products', ProductMethod.post);

router.put('/products/:id', ProductMethod.put);

router.delete('/products/:id', ProductMethod.delete);

module.exports = router;