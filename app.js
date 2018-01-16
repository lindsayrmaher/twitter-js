const express = require( 'express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes')

const app = express();

app.use(volleyball);
app.use('/', routes);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.listen(3000)














// app.use(function(req, res, next) {
// 	console.log(res.statusCode);
// 	console.log(req.method, req.path);
// 	next()
// })

// app.use('/special', function(req, res, next) {
// 	console.log('you reached the v special area');
// 	next()
// })

// var locals = {

// 	title: "An Example",

// 	people: [

// 	{name: "Gandolf"},
// 	{name: "Frodo"},
// 	{name: "Hermione"}

// 	]
// }

// app.get('/', function(req, res){
// 	res.render('index.html', locals);
// });

// app.get('/', (req, res) => res.send("Our super SICK message."))

// app.get('/news', (req, res) => res.send("An even SICKER message about news."))

//ayyy yooo what up
