const WebSocket = require('ws');
const fs = require('fs');

// Load the config file
let config = {
  serverName: "Default Server",
  port: 3000,
  gamemode: "Survival",
  maxPlayers: 50,
  minecraftVersions: ["1.8.8", "1.12.2", "1.21.7"]
};

try {
  const data = fs.readFileSync('./config.json');
  config = JSON.parse(data);
  console.log('Config loaded:', config);
} catch (err) {
  console.error('Error loading config.json, using defaults');
}

// WebSocket server setup
const wss = new WebSocket.Server({ port: process.env.PORT || config.port });

wss.on('connection', function connection(ws) {
  console.log('Player connected');
  
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    // Here you would handle EaglerCraft protocol messages
  });

  ws.on('close', () => {
    console.log('Player disconnected');
  });

  ws.send(`Welcome to ${config.serverName}! You can join with versions ${config.minecraftVersions.join(', ')}.`);
});

console.log(`EaglerCraft server "${config.serverName}" running on ws://localhost:${config.port}`);


