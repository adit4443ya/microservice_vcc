const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ time: currentTime });
});

app.listen(port, () => {
    console.log(`Service B (Time Service) listening on port ${port}`);
});
