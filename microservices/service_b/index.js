const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Read the URL for Service A from an environment variable.
// For example, if Service A is hosted on 192.168.15.10, then
// set SERVICE_A_URL=http://192.168.15.10:3001
const serviceAUrl = process.env.SERVICE_A_URL || 'http://localhost:3001';

app.get('/greet', async (req, res) => {
    try {
        // Call Service B to get the current time
        const response = await axios.get(`${serviceAUrl}/time`);
        const time = response.data.time;
        res.json({ greeting: `Hello! The current time is ${time}` });
    } catch (error) {
        console.error('Error fetching time from Service A:', error);
        res.status(500).json({ error: 'Could not retrieve time from Service A' });
    }
});

app.listen(port, () => {
    console.log(`Service B (Greeting Service) listening on port ${port}`);
});
