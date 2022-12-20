import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import socket from '../../utils/sockets'

const TeamPage = () => {
    const router = useRouter()
    const { teamName, numPlayers } = router.query

    const [players, setPlayers] = useState([])
    console.log(players)

    const handleScan = (player) => {
        if (players.length < numPlayers) {
        setPlayers([...players, player])
        } else {
        // Display an error message or redirect to the team page
        }
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
            socket.emit('join', teamName);
        });
    
        socket.on('updateNumPlayers', (newPlayers) => {
            setPlayers(newPlayers);
        });
    
        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>Team: {teamName}</h1>
            <QRCodeSVG value={`https://multiuser-test.vercel.app/${teamName}`} onScan={handleScan} />
            <p>Number of players: {players}</p>
        </div>
    )
    }

    TeamPage.getInitialProps = ({ query }) => {
    return {
        teamName: query.teamName,
        numPlayers: query.numPlayers,
    }
}

export default TeamPage
