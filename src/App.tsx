// React imports
import { useState } from "react"

// Context imports
import { ChordContext } from "./ChordContext"
import { PlayChordContext } from "./ChordContext"

// Component imports
import KeySet from "./KeySet"
import PlayButton from "./PlayButton"

export type ChordType = {
  root:string,
  quality:string
}

function App() {
  const [chord, setChord] = useState({root: "C", quality: "M"})
  const [playChord, setPlayChord] = useState(false)

  return (
    <PlayChordContext.Provider value={[playChord, setPlayChord]}>
      <ChordContext.Provider value={[chord, setChord]}>
        <div className="justify-center items-center flex w-full h-dvh bg-gray-600 font-mono">
          <div className="w-11/12 h-1/2 flex justify-center items-start flex-wrap">
            <KeySet />
            <PlayButton />
          </div>
        </div>
      </ChordContext.Provider>
    </PlayChordContext.Provider>
  )
}

export default App