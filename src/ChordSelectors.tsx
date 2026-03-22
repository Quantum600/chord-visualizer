// Hooks
import { useContext } from "react";
import { useState } from "react";
import { useMemo } from "react";

// Context
import { ChordContext } from "./ChordContext";

function ChordSelectors() {
  const [chord, setChord] = useContext(ChordContext)
  const [extensionNotes, setExtensionNotes] = useState("none")

  const roots = useMemo(() => ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"], [])
  const qualities = useMemo(() => ["maj", "min", "aug", "dim", "sus2", 'sus4'], [])
  const extensionNotesSet = useMemo(() => ["none", "4", "5", "6"], [])
  const fourExtensions = useMemo(() => ["none", "7", "maj7"], [])

  return (
    <div className="w-full h-10 text-center justify-center flex items-center">
      <select value={chord.root} onChange={r => setChord({root: r.target.value, quality: chord.quality, extension: chord.extension})} name="Root" id="root" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center mx-5">
        {roots.map(root => {
          return(<option value={root} key={root}>{root}</option>)
        })}
      </select>

      <select value={chord.quality} onChange={q => setChord({root: chord.root, quality: q.target.value, extension: chord.extension})} name="Quality" id="quality" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center mx-5">
        {qualities.map(quality => {
          return(<option value={quality} key={quality}>{quality}</option>)
        })}
      </select>

      <select value={extensionNotes} onChange={e => setExtensionNotes(e.target.value)} name="ExtensionNotes" id="extensionNotes" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center mx-5">
        {extensionNotesSet.map(extensionNoteVal => {
          return(<option value={extensionNoteVal} key={extensionNoteVal}>{extensionNoteVal}</option>)
        })}
      </select>

      {(extensionNotes !== "4") ? null : 
        <select value={chord.extension} onChange={e => setChord({root: chord.root, quality: chord.quality, extension: e.target.value})} name="Extension" id="extension" className="bg-white rounded-md w-1/12 h-3/4 text-xl text-center mx-5">
          {fourExtensions.map(extension => {
            return(<option value={extension} key={extension}>{extension}</option>)
          })}
        </select>
      }
    </div>
  )
}

export default ChordSelectors