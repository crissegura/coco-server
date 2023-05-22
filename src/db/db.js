import mysql2 from 'mysql2/promise';

const conexion = mysql2.createConnection({
    database:'coco',
    host:'localhost',
    user:'root',
    password:'crisadmin'
})

export const getConexion = ( ) => {
    return conexion
}