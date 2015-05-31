var express = require('express');
var router = express.Router();

var controlador = require('../controllers/controlador.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz de Javier Homs' });
});

router.get('/quizes/question', controlador.question);
router.get('/quizes/answer', controlador.answer);
router.get('/author', function(req, res){
  res.render('quizes/author');
});

module.exports = router;
