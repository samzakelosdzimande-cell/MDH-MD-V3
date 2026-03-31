const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// 1. Setup the WhatsApp Client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

app.use(express.static('public'));

// 2. The Web Route for Pairing
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family:sans-serif; text-align:center; margin-top:50px;">
            <h2>MDH-MD V3 Pairing Site</h2>
            <p>Enter your number with country code (e.g. 23490...)</p>
            <input type="text" id="number" placeholder="234XXXXXXXXX">
            <button onclick="getCode()">Get Code</button>
            <h1 id="displayCode" style="color:blue; margin-top:20px;"></h1>
        </div>
        <script>
            async function getCode() {
                const num = document.getElementById('number').value;
                const res = await fetch('/get-code?num=' + num);
                const data = await res.json();
                document.getElementById('displayCode').innerText = data.code || "Error: Try again";
            }
        </script>
    `);
});

// 3. API to Request the Pairing Code
app.get('/get-code', async (req, res) => {
    const phoneNumber = req.query.num;
    if (!phoneNumber) return res.json({ error: "Number required" });

    try {
        // This triggers the pairing code request in whatsapp-web.js
        const code = await client.requestPairingCode(phoneNumber);
        res.json({ code: code });
    } catch (err) {
        res.json({ error: err.message });
    }
});

// 4. Start the Bot Logic
client.on('ready', () => {
    console.log('MDH-MD is online!');
});

// Add your Menu logic here from the previous step
client.on('message', async (msg) => {
    if (msg.body === '.ping') msg.reply('pong!');
});

client.initialize();
app.listen(port, () => console.log(`Server running on port ${port}`));
