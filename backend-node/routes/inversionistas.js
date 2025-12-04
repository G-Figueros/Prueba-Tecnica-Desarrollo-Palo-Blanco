const express = require('express');
const router = express.Router();
const controller = require('../controllers/inversionistas.controller');

// IMPORTANTE: definir rutas específicas ANTES de '/:id'
router.get('/', controller.getAll);          // GET /inversionistas
router.get('/mayor', controller.getMayor);   // GET /inversionistas/mayor
router.get('/:id', controller.getById);      // GET /inversionistas/123

router.post('/', controller.create);         // POST /inversionistas
router.put('/:id', controller.update);       // PUT /inversionistas/123
router.delete('/:id', controller.remove);    // DELETE /inversionistas/123

module.exports = router;
