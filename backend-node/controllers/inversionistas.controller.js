const db = require('../db');

exports.getAll = (req, res) => {
  db.query('CALL SP_GET_INVERSIONISTAS()', (err, results) => {
    if (err) {
      console.error('Error en SP_GET_INVERSIONISTAS:', err);
      return res.status(500).json({ error: 'Error al obtener inversionistas' });
    }
    res.json(results[0]);
  });
};

exports.getMayor = (req, res) => {
  db.query('CALL SP_INVERSIONISTAS_MAYOR()', (err, results) => {
    if (err) {
      console.error('Error en SP_INVERSIONISTAS_MAYOR:', err);
      return res.status(500).json({ error: 'Error al obtener inversionistas mayores a 15000' });
    }
    res.json(results[0]);
  });
};

exports.getById = (req, res) => {
  const { id } = req.params;

  db.query(
    'SELECT id, nombre, apellido, inversion, imagen_base64, FN_ESTADO_INVERSIONISTA(id) AS estado FROM inversionista WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error('Error al obtener inversionista por ID:', err);
        return res.status(500).json({ error: 'Error al obtener inversionista' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Inversionista no encontrado' });
      }

      res.json(results[0]);
    }
  );
};

exports.create = (req, res) => {
  const { nombre, apellido, inversion, imagen_base64 } = req.body;

  db.query(
    'INSERT INTO inversionista (nombre, apellido, inversion, imagen_base64) VALUES (?, ?, ?, ?)',
    [nombre, apellido, inversion, imagen_base64],
    (err, result) => {
      if (err) {
        console.error('Error al crear inversionista:', err);
        return res.status(500).json({ error: 'Error al crear inversionista' });
      }

      res.json({ message: 'Inversionista creado', id: result.insertId });
    }
  );
};

exports.update = (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, inversion, imagen_base64 } = req.body;

  db.query(
    'UPDATE inversionista SET nombre = ?, apellido = ?, inversion = ?, imagen_base64 = ? WHERE id = ?',
    [nombre, apellido, inversion, imagen_base64, id],
    (err, result) => {
      if (err) {
        console.error('Error al actualizar inversionista:', err);
        return res.status(500).json({ error: 'Error al actualizar inversionista' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Inversionista no encontrado' });
      }

      res.json({ message: 'Inversionista actualizado' });
    }
  );
};

exports.remove = (req, res) => {
  const { id } = req.params;

  db.query(
    'DELETE FROM inversionista WHERE id = ?',
    [id],
    (err, result) => {
      if (err) {
        console.error('Error al eliminar inversionista:', err);
        return res.status(500).json({ error: 'Error al eliminar inversionista' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Inversionista no encontrado' });
      }

      res.json({ message: 'Inversionista eliminado' });
    }
  );
};
