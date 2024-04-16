const express = require('express');
const app = express();
const port = 3008;
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname,  'privacy.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,  'contact.html'));
});

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname,  'terms.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,  '404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
