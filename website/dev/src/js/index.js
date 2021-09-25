const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const DiscordRPC = require('discord-rpc');
const clientId = process.env.RPCID;
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();
const app = express();
const port = process.env.PORT || '3000';

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../html/index.html'));
});

app.get('/invite', function (req, res) {
    res.sendFile(path.join(__dirname, '../html/invite.html'));
});

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../html/login.html'));
});

app.get('/support', function (req, res) {
    res.sendFile(path.join(__dirname, '../html/support.html'));
});

async function setActivity() {
    rpc.setActivity({
        details: `Roleplay Bot Dashboard`,
        startTimestamp,
        largeImageKey: 'bot',
        largeImageText: 'Roleplay Bot',
        buttons: [
            {
                label: 'Invite Link',
                url: 'https://discord.com/api/oauth2/authorize?client_id=872568430253981786&permissions=8&scope=bot%20applications.commands',
            },
            { label: 'Support Server', url: 'https://discord.gg/PjemhcxcpM' },
        ],
    });
}

rpc.on('ready', () => {
    setActivity();
    setInterval(() => {
        setActivity();
    });
});

rpc.login({ clientId }).catch(console.error);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});
