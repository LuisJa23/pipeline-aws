const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World! - version 3'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));