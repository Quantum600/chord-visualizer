// Hooks
import { useContext } from "react";
import { useMemo } from "react";

// Context
import { ChordContext } from "./ChordContext";

function ChordSelectors() {
  const [chord, setChord] = useContext(ChordContext)

  const roots = useMemo(() => ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"], [])

  return (
    <div className="w-full h-10 text-center justify-center flex items-center">
      <select value={chord.root} onChange={r => setChord({root: r.target.value, quality: chord.quality })} name="Root" id="root" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center">
        {roots.map(root => {
          return(<option value={root}>{root}</option>)
        })}
      </select>
    </div>
  )
}

export default ChordSelectors