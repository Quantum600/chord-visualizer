// React imports
import { useState } from "react"
import { ChordContext } from "./ChordContext"

// Component imports
import KeySet from "./KeySet"

export type ChordType = {
  root:string,
  quality:string
}

function App() {
  const [chord, setChord] = useState({root: "C", quality: "M"})

  return (
    <ChordContext.Provider value={[chord, setChord]}>
      <div className="justify-center items-center flex w-full h-dvh bg-gray-600 font-mono">
        <div className="w-11/12 h-1/2 flex justify-center items-start flex-wrap">
          <KeySet />
          <div className="text-5xl bold w-full text-center select-none">Piano</div>
        </div>
      </div>
    </ChordContext.Provider>
  )
}

export default App