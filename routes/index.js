const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
});

router.get('/user/:name', function(req, res){
	// console.log('potato');
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render( 'index', {tweets: list});
});


// need help with this functionality!!
router.get('/tweets/:id', function(req, res){
  var id = parseInt(req.params.id);
  var list = tweetBank.find({'id': id});
  res.render( 'index', {tweets: list});
});

router.post('/tweets', function(req, res) {
	// console.log(req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


router.use(express.static('public'));

module.exports = router;
