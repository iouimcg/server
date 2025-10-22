const WebSocket = require('ws');

const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
  console.log('Player connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    // TODO: handle EaglerCraft protocol here
  });

  ws.on('close', () => {
    console.log('Player disconnected');
  });

  ws.send('Welcome to your EaglerCraft server!');
});

console.log(`Server running on ws://localhost:${PORT}`);

