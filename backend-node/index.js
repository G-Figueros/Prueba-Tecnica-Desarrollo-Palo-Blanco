const express = require('express');
const cors = require('cors');
const inversionistasRoutes = require('./routes/inversionistas');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de Inversionistas - Constructora Palo Blanco');
});

app.use('/inversionistas', inversionistasRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 API corriendo en http://localhost:${PORT}`);
});
