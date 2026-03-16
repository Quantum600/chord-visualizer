import WhiteKey from "./WhiteKey"
import BlackKey from "./BlackKey";

interface Key {
  note: string;
  semis: number;
}

// List of 3 octaves of keys
const Keys: Key[] = [
  {note: "C3", semis: 24},
  {note: "Db3 C#3", semis: 25},
  {note: "D3", semis: 26},
  {note: "Eb3 D#3", semis: 27},
  {note: "E3", semis: 28},
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
]

function KeySet() {
  return (
    <>
      {Keys.map(Key => {
        // If the key is a sharp/flat, map it as a black key, otherwise, its a white key
        if(Key.note.includes("#")) {
          return(<BlackKey key={Key.note} note={Key.note} semis={Key.semis} />)
        } else {
          return(<WhiteKey key={Key.note} note={Key.note} semis={Key.semis} />)
        }
      })}
    </>
  )
}

export default KeySet