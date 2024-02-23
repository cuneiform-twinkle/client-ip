const express = require('express');
const app = express();

// Middleware to get client IP
app.use((req, res, next) => {
  req.clientIp = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
                 req.socket.remoteAddress;
  next();
});

// Example route to log the client IP
app.get('/', (req, res) => {
  console.log('Client IP:', req.clientIp);
  res.send('Hello, World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

