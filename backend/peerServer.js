const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PEER_PORT || 3001,
  path: '/',
  allow_discovery: true,
  proxied: true,
  debug: process.env.NODE_ENV === 'development',
  ssl: process.env.NODE_ENV === 'production' ? undefined : undefined,
  config: {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
      { urls: 'stun:stun3.l.google.com:19302' },
      { urls: 'stun:stun4.l.google.com:19302' },
      { urls: 'stun:stun5.l.google.com:19302' },
      { urls: 'stun:stun6.l.google.com:19302' },
      { urls: 'stun:stun7.l.google.com:19302' },
      { urls: 'stun:stun8.l.google.com:19302' }
    ]
  }
});

peerServer.on('connection', (client) => {
  console.log('Client connected:', client.getId());
});

peerServer.on('disconnect', (client) => {
  console.log('Client disconnected:', client.getId());
});

module.exports = peerServer; 