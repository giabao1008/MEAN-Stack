const express = require('express');
const tinhController = require('./controllers/tinhController');

const app = express();


// Tinh toan
app.get('/tinh/:tenPhepTinh/:soA/:soB', tinhController);



app.listen(3000);