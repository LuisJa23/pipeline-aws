const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hergo Workshop</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: #fff;
        }
        .container {
          text-align: center;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚗 Bienvenido Lindoskyss</h1>
        <p>Tu aplicación está funcionando correctamente - versión 6</p>
      </div>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
