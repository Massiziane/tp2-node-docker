const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let counter = 0;

// Home page (counter)
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Click Counter</h1>
        <p>Count: ${counter}</p>

        <button onclick="fetch('/click').then(() => location.reload())">
            Click me
        </button>

        <br><br>
        <a href="/about">About</a>
    `);
});

// increment counter
app.get("/click", (req, res) => {
    counter++;
    res.json({ counter });
});

//  About page
app.get("/about", (req, res) => {
    res.send(`
        <h1>ℹ️ About</h1>
        <p>This is a simple Node.js + Express application created for a Docker lab assignment.</p>
        <a href="/">Back home</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});