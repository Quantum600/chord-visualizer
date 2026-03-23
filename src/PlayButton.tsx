import { useContext } from "react"
import { PlayChordContext } from "./ChordContext"

function PlayButton() {
  const [playChord, setPlayChord] = useContext(PlayChordContext)

  return (
    <div className="w-full flex justify-center items-center text-3xl h-14">
      <button onClick={() => setPlayChord(!playChord)} className="w-60 h-full bg-linear-to-br from-green-400 to-green-800 rounded-xl shadow-green-950 shadow-2xl cursor-pointer transition-all brightness-100 hover:brightness-90 active:brightness-75">
        {playChord ? "Stop chord" : "Play chord"}
      </button>
    </div>
  )
}

export default PlayButton