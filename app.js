const IP = '192.168.1.9';
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const serveStatic = require('serve-static');
app.use(serveStatic(path.join(__dirname, 'public')));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/favicon.ico', (req, res) => {
    res.end('favicon')
})

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, IP, () => {
    const port = server.address().port;
    console.log(`${IP}:${port}`);
  });

}

module.exports = app;


