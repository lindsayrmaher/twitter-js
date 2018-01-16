const express = require('express');
const router = express.Router();

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});

router.get('/tweets/:name', function(req, res){
	// console.log('potato');
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  res.render( 'index', {tweets: list});
});


// need help with this functionality!!
// router.get('/tweets/7', function(req, res){
// 	console.log(req.params.name);
//   var id = req.params.id;
//   console.log(typeof id);
//   var list = tweetBank.find({id: id});
//   console.log(list);
//   // console.log('potato')
//   res.render( 'index', {tweets: list});
// });


router.use(express.static('public'));

module.exports = router;
