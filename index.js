const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send('pong from profile');
});

app.listen(PORT, () => {
  console.log(`Profile service running on port ${PORT}`);
});
