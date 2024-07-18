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

router.get('/sellers-carousel', function(req, res, next) {
  res.render('sellers-carousel');
});

router.get('/highlight-by-department', function(req, res, next) {
  res.render('highlight-by-department');
});

router.get('/highlight-banners', function(req, res, next) {
  res.render('highlight-banners');
});

router.get('/search', function(req, res, next) {
  res.render('search');
});

router.get('/shopping-banner', function(req, res, next) {
  res.render('shopping-banner');
});

router.get('/shopping-actions', function(req, res, next) {
  res.render('shopping-actions');
});

module.exports = router;
