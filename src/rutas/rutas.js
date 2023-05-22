import { Router } from "express";
import { addComedor, addProducto, addUSer, getComedor, getUsers } from "../controles/controles.js";

const route = Router()

route.get('/',(req,res)=>{
    res.send('Servidor corriendo...')
})

//abm usuarios
route.post('/agregarusuario', addUSer)
route.get('/verusuarios', getUsers)

//abm comedores
route.post('/crearcomedor', addComedor)
route.get('/vercomedor', getComedor)

//abm productos
route.put('/agregandoproductos/:creador', addProducto)


export default route;