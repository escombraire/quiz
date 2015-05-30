var express = require('express');

exports.question = function(req, res){
  res.render('quizes/question', {pregunta: '¿Cuál es la capital de Portugal?'});
};

exports.answer = function(req, res){
  if (req.query.respuesta.toLowerCase() === 'lisboa'){
    res.render('quizes/answer',{respuesta: 'Muy bien'});
  }else{
    res.render('quizes/answer',{respuesta: 'No es correcto'});
  }
};
