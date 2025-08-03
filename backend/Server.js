const express = require('express');
const cors = require('cors');
const morgan = require('morgan');         // For logging requests
const helmet = require('helmet');         // Security best practices
const rateLimit = require('express-rate-limit'); // Prevent abuse
require('dotenv').config();                // Environment variables support

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());                  // For parsing JSON body in requests
app.use(morgan('dev'));                   // Logs requests in development mode

// Rate Limiting middleware: max 100 requests per IP per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Dummy user data
const userData = {
  name: "Atharv Puranik",
  referralCode: "atharv2025",
  donationsRaised: 7500
};

// Dummy leaderboard data
const leaderboardData = [
  { name: "Atharv", donationsRaised: 7500 },
  { name: "Riya", donationsRaised: 6800 },
  { name: "Karan", donationsRaised: 5900 }
];

// Routes
app.get('/api/user', (req, res) => {
  res.status(200).json(userData);
});

app.get('/api/leaderboard', (req, res) => {
  res.status(200).json(leaderboardData);
});

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Resource not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
