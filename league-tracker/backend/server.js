const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Import routes
const leagueRoutes = require('./routes/leagueRoutes');
app.use('/api/league', leagueRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
