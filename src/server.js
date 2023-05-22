import express, { json } from 'express';
import Cors from 'cors';
import route from './rutas/rutas.js';

const app = express()

app.use(Cors())
app.use(json())
app.use(route)


app.listen(5500,()=>{
    console.log('Servidor corriendo en http://localhost:5500/')
})