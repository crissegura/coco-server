import { getConexion } from "../db/db.js";

//crear nuevo usuario
export const addUSer = async ( req, res ) => {
    try {
        let conexion = await getConexion()
        let {nombre,apellido,fechanacimiento,celular,email,contraseña,rol} = req.body
        let user = {nombre,apellido,fechanacimiento,celular,email,contraseña,rol}
        let result =  await conexion.query('INSERT INTO users SET ?',user)
        res.json('Usuario agregado correctamente.')
    } catch (error) {
        console.log(error)
    }
}

//obtener usuarios
export const getUsers = async ( req, res ) => {
    try {
        let conexion = await getConexion()
        let result =  await conexion.query('SELECT * FROM users')
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

//crear comedor
export const addComedor = async ( req, res ) => {
    try {
        let conexion = await getConexion()
        let {nombre,fechainicio,creador, celular,email} = req.body
        let comedor = {nombre,fechainicio,creador,celular,email}
        let result =  await conexion.query('INSERT INTO comedores SET ?',comedor)
        res.json('Comedor creado correctamente.')
    } catch (error) {
        console.log(error)
    }
}

export const getComedor = async ( req, res ) => {
    try {
        let conexion = await getConexion()
        let result =  await conexion.query('SELECT * FROM comedores')
        res.json(result[0])
    } catch (error) {
        console.log(error)
    }
}

//stock
export const addProducto = async ( req, res ) => {
    try {
        let conexion = await getConexion()
        let {stock} = req.body
        let {creador} = req.params
        let result =  await conexion.query('UPDATE comedores SET ? WHERE creador = ?',[stock,creador])
        res.json('Producto agregado correctamente.')
    } catch (error) {
        console.log(error)
    }
}