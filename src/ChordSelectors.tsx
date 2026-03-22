// Hooks
import { useContext } from "react";
import { useMemo } from "react";

// Context
import { ChordContext } from "./ChordContext";

function ChordSelectors() {
  const [chord, setChord] = useContext(ChordContext)

  const roots = useMemo(() => ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"], [])
  const qualities = useMemo(() => ["maj", "min", "aug", "dim", "sus2", 'sus4'], [])

  return (
    <div className="w-full h-10 text-center justify-center flex items-center">
      <select value={chord.root} onChange={r => setChord({root: r.target.value, quality: chord.quality})} name="Root" id="root" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center mx-5">
        {roots.map(root => {
          return(<option value={root} key={root}>{root}</option>)
        })}
      </select>
      <select value={chord.quality} onChange={q => setChord({root: chord.root, quality: q.target.value})} name="Quality" id="quality" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center mx-5">
        {qualities.map(quality => {
          return(<option value={quality} key={quality}>{quality}</option>)
        })}
      </select>
    </div>
  )
}

export default ChordSelectors