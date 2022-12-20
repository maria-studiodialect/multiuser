import Header from '../components/header';
import socket from '../utils/sockets'
import Link from 'next/link';

export default function Shape() {
    socket.on('connect', () => {
        socket.emit('message', 'Hello, server!');
    });
    return (
        <div>
        <Header/>
        <Title text='Change through the colours'/>
        </div>
    )
}
