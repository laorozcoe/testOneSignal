const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Puedes cambiar el puerto según tus necesidades

// Configurar la carpeta pública
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
