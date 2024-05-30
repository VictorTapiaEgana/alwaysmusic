const chalk = require('chalk');
var Pool = require('pg-pool');

const config = {
    host: "localhost",
    port: 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};

const pool = new Pool(config);

async  function listado (){
    const text = "SELECT nombre,rut,curso,nivel FROM estudiantes";    
    const response = await pool.query(text);
    console.log(response.rows);
}

async  function seleccionar (rut){
    const text = "SELECT nombre,rut,curso,nivel FROM estudiantes WHERE rut = $1";
    const values = [rut];
    const response = await pool.query(text, values);
    console.log(response.rows);
}

async  function insertar (rut, nombre, curso, nivel){
    const text = "INSERT INTO estudiantes VALUES ( $1 , $2 , $3 , $4 )";
    const values = [rut, nombre, curso, nivel]    
    const response = await pool.query(text,values);
    console.log(chalk.bgGreen.white(`Datos de ${nombre} ingresado correctamente.`));
}

async  function eliminar (rut){
    const text = "DELETE FROM estudiantes WHERE rut = $1";    
    const values =[rut]
    const response = await pool.query(text,values);
    console.log(chalk.bgRed.yellow(`Datos de ${rut} ELIMINADOS.`));
}

async  function actualizar (nombre,rut, curso, nivel){
    const text = "UPDATE estudiantes SET nombre = $2, curso = $3, nivel = $4 WHERE rut = $1";         
    console.log(rut, nombre, curso, nivel)
    const values =[rut, nombre, curso, nivel]
    const response = await pool.query(text,values);
    console.log(chalk.bgBlue.green(`Datos de ${rut} Actualizados.`));
}

module.exports = { seleccionar, listado, insertar, eliminar, actualizar };