// React imports
import { useState } from "react"
import { ChordNotesContext } from "./ChordNotesContext"

// Component imports
import KeySet from "./KeySet"

function App() {
  const [chordNotes, setChordNotes] = useState(["C", "E", "G"])

  return (
    <ChordNotesContext.Provider value={[chordNotes, setChordNotes]}>
      <div className="justify-center items-center flex w-full h-dvh bg-gray-600 font-mono">
        <div className="w-11/12 h-1/2 flex justify-center items-start flex-wrap">
          <KeySet />
          <div className="text-5xl bold w-full text-center select-none">Piano</div>
        </div>
      </div>
    </ChordNotesContext.Provider>
  )
}

export default App