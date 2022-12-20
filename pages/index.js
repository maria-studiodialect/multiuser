import Head from 'next/head'
import Image from 'next/image'
import LogoBlock from '../components/LogoBlock';
import socket from '../utils/sockets'
import Link from 'next/link';
import NeutralBlock from '../components/NeutralBlock';

export default function Home() {
  socket.on('connect', () => {
    socket.emit('message', 'Hello, server!');     
  });
  return (
    <div className='my-20 mx-14 flex flex-col justify-center items-center h-[80vh]'>
      <LogoBlock/>
      <div className='bg-black rounded-3xl max-w-2xl p-8 shadow-xl drop-shadow-black text-light w-full'>
        <div>01</div>
        <div>TELL US MORE ABOUT YOU</div>
      </div>
      <div className='flex'>
        <Link href='/singlePlayer'>
          <div className='bg-black rounded-3xl max-w-2xl p-8 shadow-xl drop-shadow-black text-light h-full'>
            <div className='w-4 mb-5'><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 11"><rect fill='#E8EBEC' x="1" y="7" width="2" height="2"/><rect fill='#E8EBEC' y="8" width="2" height="3"/><rect fill='#E8EBEC' x="8" y="8" width="2" height="3"/><rect fill='#E8EBEC' x="2" y="6" width="6" height="2"/><rect fill='#E8EBEC' x="7" y="7" width="2" height="2"/><rect fill='#E8EBEC' x="3" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="4" width="2" height="2"/><rect fill='#E8EBEC' x="5" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="4" y="2" width="2" height="2"/></svg></div>
            <div>I AM A SINGLE PLAYER</div>
          </div>
        </Link>
        <Link href='/multiPlayer'>
        <div className='bg-black rounded-3xl max-w-2xl p-8 shadow-xl drop-shadow-black text-light h-full'>
          <div className='w-8 mb-5'><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14"><rect fill='#E8EBEC' x="6" y="10" width="2" height="2"/><rect fill='#E8EBEC' x="5" y="11" width="2" height="3"/><rect fill='#E8EBEC' x="13" y="11" width="2" height="3"/><rect fill='#E8EBEC' x="18" y="8" width="2" height="3"/><rect fill='#E8EBEC' y="8" width="2" height="3"/><rect fill='#E8EBEC' x="7" y="9" width="6" height="2"/><rect fill='#E8EBEC' x="14" y="6" width="4" height="2"/><rect fill='#E8EBEC' x="2" y="6" width="4" height="2"/><rect fill='#E8EBEC' x="12" y="10" width="2" height="2"/><rect fill='#E8EBEC' x="17" y="7" width="2" height="2"/><rect fill='#E8EBEC' x="1" y="7" width="2" height="2"/><rect fill='#E8EBEC' x="8" y="4" width="2" height="2"/><rect fill='#E8EBEC' x="13" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="5" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="9" y="3" width="2" height="2"/><rect fill='#E8EBEC' x="14" width="2" height="2"/><rect fill='#E8EBEC' x="4" width="2" height="2"/><rect fill='#E8EBEC' x="10" y="4" width="2" height="2"/><rect fill='#E8EBEC' x="15" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="3" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="9" y="5" width="2" height="2"/><rect fill='#E8EBEC' x="14" y="2" width="2" height="2"/><rect fill='#E8EBEC' x="4" y="2" width="2" height="2"/></svg></div>
          <div>I AM STARTING A TEAM</div>
        </div>
        </Link>
      </div>
    </div>
  )
}
