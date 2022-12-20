import { useRouter } from 'next/router'
import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'

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

    return (
        <div>
            <h1>Team: {teamName}</h1>
            <QRCodeSVG value={`${teamName}/${players.length + 1 + 1}`} onScan={handleScan} />
            {players.map((player) => (
                <div key={player}>Player {player}: Joined</div>
            ))}
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
