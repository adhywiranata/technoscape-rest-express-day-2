var express = require('express');
var router = express.Router();

// BARU DI COPAS DARI PROJECT DAY - 1
const ProductRepository = require('../repositories/product');

router.get('/', async (req, res) => {
  const allProducts = await ProductRepository.findAll();
  return res.json(allProducts);
});

router.get('/:id', async (req, res) => {
  const productDetail = await ProductRepository.findOne(req.params.id);
  return res.json(productDetail);
});

router.post('/', async (req, res) => {
  await ProductRepository.insert(req.body);
  return res.json({ message: 'Sukses' });
});

router.put('/:id', async (req, res) => {
  await ProductRepository.update(req.params.id, req.body);
  return res.json({ message: 'Sukses' });
});

router.delete('/:id', async (req, res) => {
  await ProductRepository.delete(req.params.id);
  return res.json({ message: 'Sukses' });
});

module.exports = router;
