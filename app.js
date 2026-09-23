const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/about', (req, res) => {
  res.send('This is the about page. I built this server myself!');
});

app.get('/contact', (req, res) => {
  res.send('Contact me at: nebo.blizko@gmail.com');
});

app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

app.get('/api/greeting', (req, res) => { const name = req.query.name || 'World'; res.json({ greeting: 'Hello, ' + name + '!' }); });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});