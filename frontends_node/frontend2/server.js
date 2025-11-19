const express = require('express');
const app = express();
const axios = require('axios');
app.set('view engine', 'hbs');
app.get('/', async (req, res) => {
  try {
    const data = await axios.get('http://localhost:8081/api/ventas/por-producto');
    res.render('index', { productos: data.data });
  } catch (e) {
    res.send('Error conectando al BackEnd 2');
  }
});
app.listen(3002, () => console.log("Frontend2 en puerto 3002"));
