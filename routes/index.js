	const express = require('express');
	const router = express.Router();

	// could use one line instead: const router = require('express').Router();
	const tweetBank = require('../tweetBank');

module.exports = function(io) {

	router.get('/', function (req, res, next) {
	  let tweets = tweetBank.list();
	  res.render('index', { tweets: tweets, showForm: true });
	});

	router.get('/user/:name', function (req, res, next){
		// console.log('potato');
	  var name = req.params.name;
	  var list = tweetBank.find({name: name});
	  res.render( 'index', {tweets: list});
	});


	// need help with this functionality!!
	router.get('/tweets/:id', function (req, res, next){
	  var id = parseInt(req.params.id);
	  var list = tweetBank.find({'id': id});
	  res.render( 'index', {tweets: list});
	});

	router.post('/tweets', function (req, res, next) {
		// console.log(req.body);
	  var name = req.body.name;
	  var text = req.body.text;
	  var newTweet = tweetBank.add(name, text);
	  // io.sockets.emit('new_tweet', newTweet);
	  res.redirect('/');
	});


	router.use(express.static('public'));

	return router;
}


