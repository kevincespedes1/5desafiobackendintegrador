import express from 'express';
import productManager from '../dao/db/ProductManager.js';
import { uploader } from '../utils.js';
import io from '../app.js';

const realTimeRouter = express.Router();

realTimeRouter.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('index', { products });
   
  });

export default realTimeRouter;