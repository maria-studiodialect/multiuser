import io from 'socket.io-client';

const socket = io('multi-user-server.glitch.me');

export default socket;