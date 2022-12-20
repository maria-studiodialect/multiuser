import Head from 'next/head'
import Image from 'next/image'
import LogoBlock from '../components/LogoBlock';
import socket from '../utils/sockets'
import Link from 'next/link';
import NeutralBlock from '../components/NeutralBlock';
import {useRouter} from 'next/router'
import { useState } from 'react';

export default function SinglePlayer() {
  socket.on('connect', () => {
    socket.emit('message', 'Hello, server!');
  });

  const router = useRouter()
  const [teamName, setTeamName] = useState('')
  const [numPlayers, setNumPlayers] = useState(1)

  console.log(numPlayers);

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push({ pathname: `/teams/${teamName}`, query: { teamName, numPlayers } })
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className='my-20 mx-14 flex flex-col justify-center items-end h-[80vh]'>
      <LogoBlock/>
      <div type="text" value={teamName} onChange={(event) => setTeamName(event.target.value)} className='bg-black rounded-3xl w-full max-w-2xl p-8 shadow-xl drop-shadow-black text-light'>
        <div>02</div>
        <div className='uppercase w-2/3'>Please enter your team name</div>
        <input className='border-b border-white w-full bg-transparent mt-8 mb-4'/>
      </div>
      <div className='bg-black rounded-3xl w-full max-w-2xl p-8 shadow-xl drop-shadow-black text-light'>
        <div className='uppercase'>How many players?</div>
        <input type='range' min='1' max='5' value={numPlayers} onChange={(event) => setNumPlayers(event.target.value)} className='w-full bg-transparent mt-5 accent-white'/>
      </div>
      <button type="submit" value="Create Team" className='bg-black rounded-xl py-3 px-5 shadow-xl drop-shadow-black text-light flex items-center hover:bg-light hover:text-black'>SUBMIT <div className='w-4 ml-2'><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.53 6.75"><path  fill='#E8EBEC' d="M6.14,6.07l4.13-2.31H0v-.76H10.27L6.14,.7l.34-.7,6.06,3.37-6.06,3.38-.34-.68Z"/></svg></div></button>
    </div>
    </form>
  )
}
