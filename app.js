const express = require( 'express');
const app = express();

app.get('/', (req, res) => res.send("Our super SICK message."))

app.get('/news', (req, res) => res.send("An even SICKER message about news."))

app.listen(3000)