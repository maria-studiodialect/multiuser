import { useRouter } from 'next/router'
import socket from '../utils/sockets'

const PlayerPage = () => {
    const router = useRouter()
    const { teamName, player } = router.query
    socket.emit('join', teamName)
    return (
        <div>
        <h1>Team: {teamName}</h1>
        <h2>Player: {player}</h2>
        </div>
    )
}

export default PlayerPage
