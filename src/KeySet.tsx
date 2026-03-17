import WhiteKey from "./WhiteKey"
import BlackKey from "./BlackKey";

import {useContext} from 'react';
import { ChordContext } from "./ChordContext";

interface Key {
  note: string;
  semis: number;
}

// List of 3 octaves of keys
const Keys: Key[] = [
  {note: "F3", semis: 29},
  {note: "Gb3 F#3", semis: 30},
  {note: "G3", semis: 31},
  {note: "Ab3 G#3", semis: 32},
  {note: "A3", semis: 33},
  {note: "Bb3 A#3", semis: 34},
  {note: "B3", semis: 35},
  {note: "C4", semis: 36},
  {note: "Db4 C#4", semis: 37},
  {note: "D4", semis: 38},
  {note: "Eb4 D#4", semis: 39},
  {note: "E4", semis: 40},
  {note: "F4", semis: 41},
  {note: "Gb4 F#4", semis: 42},
  {note: "G4", semis: 43},
  {note: "Ab4 G#4", semis: 44},
  {note: "A4", semis: 45},
  {note: "Bb4 A#4", semis: 46},
  {note: "B4", semis: 47},
  {note: "C5", semis: 48},
  {note: "Db5 C#5", semis: 49},
  {note: "D5", semis: 50},
  {note: "Eb5 D#5", semis: 51},
  {note: "E5", semis: 52},
  {note: "F5", semis: 53},
  {note: "Gb5 F#5", semis: 54},
  {note: "G5", semis: 55},
  {note: "Ab5 G#5", semis: 56},
  {note: "A5", semis: 57},
  {note: "Bb5 A#5", semis: 58},
  {note: "B5", semis: 59},
  {note: "C6", semis: 60},
  {note: "Db6 C#6", semis: 61},
  {note: "D6", semis: 62},
  {note: "Eb6 D#6", semis: 63},
  {note: "E6", semis: 64},
  {note: "F6", semis: 65},
]

function KeySet() {
  const pianoKeys = Keys.map(Key => {
    // If the key is a sharp/flat, map it as a black key, otherwise, its a white key
    if(Key.note.includes("#")) {
      return(<BlackKey key={Key.semis.toString()} note={Key.note} semis={Key.semis} />)
    } else {
      return(<WhiteKey key={Key.semis.toString()} note={Key.note} semis={Key.semis} />)
    }
  })

  const [chord] = useContext(ChordContext)
  const chordNotes: number[] = [];
  if(chord.root == "C" && chord.quality == "M") {
    chordNotes.push(36, 36+4, 36+3);
  }

  console.log(pianoKeys.find((element) => {
    return element.key == "57"
  }))

  return (
    <>
      {pianoKeys}
    </>
  )
}

export default KeySet