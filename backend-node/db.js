// C:\Gabriel\Desarrollos Palo Blanco\PRUEBA TÉCNICA\Prueba-Tecnica-Desarrollo-Palo-Blanco\backend-node\db.js

const mysql = require('mysql2');

const db = mysql.createPool({
  host: 'localhost',
  user: 'gfigueros',        
  password: 'Figueros432!', 
  database: 'Palo_Blanco'  
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
  } else {
    console.log('Conectado a MySQL');
    connection.release();
  }
});

module.exports = db;
