var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET Library page. */
router.get('/library', function(req, res, next) {
  res.render('library', { title: 'Library' });
});



/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


/* GET createbook page. */
router.get('/create-book', function(req, res, next) {
  res.render('createbook', { title: 'Create New Book' });
});

/* GET detail page. */
router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'Detail' });
});




module.exports = router;
