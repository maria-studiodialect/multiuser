import { useRouter } from 'next/router'

const PlayerPage = () => {
    const router = useRouter()
    const { teamName, player } = router.query

    return (
        <div>
        <h1>Team: {teamName}</h1>
        <h2>Player: {player}</h2>
        </div>
    )
}

export default PlayerPage
