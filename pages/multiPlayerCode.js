import Head from 'next/head'
import Image from 'next/image'
import LogoBlock from '../components/LogoBlock';
import socket from '../utils/sockets'
import { useQRCode } from 'next-qrcode';

export default function MultiPlayerCode() {
  socket.on('connect', () => {
    socket.emit('message', 'Hello, server!');
  });
  const players = [{active: true}, {active: true}, {active: false}, {active: false}]
  const { Canvas } = useQRCode();
  return (
    <div className='my-20 mx-14 flex flex-col justify-center items-end h-[80vh]'>
      <LogoBlock/>
      <div className='bg-black rounded-3xl w-full max-w-2xl p-8 shadow-xl drop-shadow-black text-light'>
        <div>02</div>
        <div className='uppercase w-2/3'>Please enter your team name</div>
        <input className='border-b border-white w-full bg-transparent mt-8 mb-4'/>
      </div>
      <div className='flex max-w-2xl w-full'>
        <div className='mt-4 mr-4 ml-2'>
        <Canvas
          text={'https://github.com/bunlong/next-qrcode'}
          options={{
            level: 'M',
            margin: 0,
            scale: 5,
            width: 150,
            color: {
              dark: '#000000',
              light: '#E8EBEC',
            },
          }}
        /></div>
        <div className='bg-black rounded-3xl w-full max-w-2xl p-4 text-center shadow-xl drop-shadow-black text-light flex flex-col justify-between'>
          <div className='grid grid-cols-2 items-center text-center mt-3'>
          {players.map((player, i) => (
            <div key={i} className='self-center'>
              <div className={`w-5 mb-5 mx-auto ${player.active ? 'opacity-100' : 'opacity-40' }`}><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 11"><rect fill='#E8EBEC' x="1" y="7" width="2" height="2"/><rect fill='#E8EBEC' y="8" width="2" height="3"/><rect fill='#E8EBEC' x="8" y="8" width="2" height="3"/><rect fill='#E8EBEC' x="2" y="6" width="6" height="2"/><rect fill='#E8EBEC' x="7" y="7" width="2" height="2"/><rect fill='#E8EBEC' x="3" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="4" width="2" height="2"/><rect fill='#E8EBEC' x="5" y="1" width="2" height="2"/><rect fill='#E8EBEC' x="4" y="2" width="2" height="2"/></svg></div>
            </div>
          ))}
          </div>
          <div className='text-xs mb-1'>2/4 ONLINE</div>
        </div>
      </div>
      </div>
  )
}
