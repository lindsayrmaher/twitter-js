const express = require( 'express');
const volleyball = require('volleyball');
const app = express();

// app.use(function(req, res, next) {
// 	console.log(res.statusCode);
// 	console.log(req.method, req.path);
// 	next()
// })

// app.use('/special', function(req, res, next) {
// 	console.log('you reached the v special area');
// 	next()
// })

app.use(volleyball);

app.get('/', (req, res) => res.send("Our super SICK message."))

app.get('/news', (req, res) => res.send("An even SICKER message about news."))

app.listen(3000)

//ayyy yooo what up
