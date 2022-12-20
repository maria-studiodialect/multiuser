import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Header from '../components/Header';
import Title from '../components/Title';
import socket from '../utils/sockets'

export default function Selection() {
    socket.on('connect', () => {
        socket.emit('message', 'Hello, server!');
    });
    return (
        <div>
        <Header/>
        <div className='mx-5 h-[75vh] flex flex-col justify-center max-w-3xl md:mx-auto'>
            <Title text='Select a part to control'/>
            <div className='grid grid-cols-2 gap-4'>
            <div>
                <Link href='/colour'><div className='border border-white rounded-full text-center px-5 py-3 text-xl hover:bg-white hover:text-black'>Colour</div></Link>
                <div className='text-xs text-center mt-1 mb-3'>Waitlist: 0</div>
            </div>
            <div>
                <Link href='/colour'><div className='border border-white rounded-full text-center px-5 py-3 text-xl hover:bg-white hover:text-black'>Shape</div></Link>
                <div className='text-xs text-center mt-1 mb-3'>Waitlist: 1</div>
            </div>
            </div>
        </div>
        </div>
    )
}
