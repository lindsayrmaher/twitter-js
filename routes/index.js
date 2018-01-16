const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
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


router.use(express.static('public'));

module.exports = router;
