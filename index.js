const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Selamat datang !')
})

app.get('/api-articles', function (req, res) {
    res.send('Ini adalah API Artikel')
})

app.get('/api-articles/:slug', function (req, res) {
    res.send('Ini adalah API Detail Artikel')
})


app.listen(8081, () => {
    console.log('Server running in port : 8081');
});

module.exports = app;