const express = require('express');
const { notifyIndexer } = require('../controllers/submissionController');
const router = express.Router();

// Endpoint to notify the indexer and trigger leaderboard update
router.post('/notify', notifyIndexer);

module.exports = router;