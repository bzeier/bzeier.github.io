import GameCard from "./GameCard"
import dbdata from '../db/dbdata'

function Gamelist({ searchResult }) {
    return (
        <div className="px-5 my-1 grid-cols-2">
            {dbdata.map(result => (
                result.title.toLowerCase().includes(searchResult.toLowerCase()) ? 
                <GameCard key={result.id} game={result} />
                :
                <>
                </>
            ))}

        </div>
    )
}

export default Gamelist
