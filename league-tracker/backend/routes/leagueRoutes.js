const express = require('express');
const router = express.Router();
const { fetchSummonerData } = require('../controllers/leagueController');

router.get('/summoner/:name', fetchSummonerData);

module.exports = router;
