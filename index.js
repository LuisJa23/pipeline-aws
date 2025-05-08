const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('¡Hola Mundo desde AWS!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
