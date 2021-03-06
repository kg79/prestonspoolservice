// const IP = '192.168.1.9';
const IP = 'localhost';
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/sitemap', (req, res) => {
  res.sendFile(path.join(__dirname, '/sitemap.xml'));
})

app.get('/favicon.ico', (req, res) => {
    res.end('favicon')
})

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8081, IP, () => {
    const port = server.address().port;
    console.log(`:${port}`);
  });

}

module.exports = app;


