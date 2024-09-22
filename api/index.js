import express from 'express'
import { logger } from './middlewares/logger.js';
import { router } from './routes/api.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger)

app.use('/api', router);

app.use((req,res) =>{
    res.status(404).json({error: 'Ruta no encontrada'})
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})