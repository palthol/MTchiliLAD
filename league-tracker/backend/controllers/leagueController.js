const axios = require('axios');

const fetchSummonerData = async (req, res) => {
  const { name } = req.params;
  const apiKey = process.env.RIOT_API_KEY;

  try {
    const response = await axios.get(`https://<Riot-API-URL>/summoner/${name}?api_key=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch summoner data' });
  }
};

module.exports = { fetchSummonerData };
