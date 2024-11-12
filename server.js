const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000; // You can choose any available port

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from 'public' directory
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// In-memory storage for URLs
const urlDatabase = {};

// Endpoint to render the index.ejs page
app.get('/', (req, res) => {
    res.render('index'); // Render the index.ejs file
});

// Endpoint to create a short URL
app.post('/shorten', (req, res) => {
    const { originalUrl, alias } = req.body;
    const shortUrl = `http://localhost:${PORT}/${alias}`; // Short URL pointing to local server
    urlDatabase[alias] = originalUrl; // Store the original URL
    res.json({ shortUrl });
});

// Endpoint to handle redirection
app.get('/:alias', (req, res) => {
    const { alias } = req.params;
    const originalUrl = urlDatabase[alias];
    if (originalUrl) {
        res.redirect(originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});