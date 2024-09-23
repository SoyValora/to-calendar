import express from 'express'
import { recibirMensaje, saludo } from '../controllers/apiController.js';

export const router = express.Router();

router.get('/saludo', saludo);

router.post('/mensaje', recibirMensaje);
