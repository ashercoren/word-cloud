const express = require('express');
const router = express.Router();
const controller = require('./wordCount.controller');

router.get('/:iterations?', controller.getWordCount);

module.exports = router;
