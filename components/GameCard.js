import Image from "@material-tailwind/react/Image"
import ToolTag from "./ToolTag"

function GameCard({ game }) {
    return (
        <div className="bg-white inline-block max-w-1 items-center m-2 p-2 rounded-lg shadow-md">
            <div className="flex flex-shrink">
                <div className="relative w-60 h-100 p-2 cursor-pointer">
                    <text className="p-1 text-gray-800 flex text-lg">{game.title.toUpperCase()}</text>
                    <Image layout="fill"  className="flex flex-fill p-0.1 pb-1" src={game.image}></Image>
                    {
                        game.tools.map((r) => (
                            <ToolTag name={r} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default GameCard
