var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/header', function(req, res, next) {
  res.render('header');
});

router.get('/account-balance', function(req, res, next) {
  res.render('account-balance');
});

router.get('/inline-actions', function(req, res, next) {
  res.render('inline-actions');
});

router.get('/banners', function(req, res, next) {
  res.render('banners');
});

router.get('/credit-card-balance', function(req, res, next) {
  res.render('credit-card-balance');
});

router.get('/lending', function(req, res, next) {
  res.render('lending');
});

router.get('/current', function(req, res, next) {
  res.render('current');
});

router.get('/shopping', function(req, res, next) {
  res.render('shopping');
});

router.get('/without-skeleton-fade', function(req, res, next) {
  res.render('without-skeleton-fade');
});

module.exports = router;
