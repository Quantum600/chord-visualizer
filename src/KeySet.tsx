import WhiteKey from "./WhiteKey"
import BlackKey from "./BlackKey";

interface Key {
  note: string;
  semis: number;
}

const Keys: Key[] = [
  {note: "C4", semis: 36},
  {note: "C#4", semis: 37},
  {note: "D4", semis: 38},
  {note: "D#4", semis: 39},
  {note: "E4", semis: 40},
  {note: "F4", semis: 41},
  {note: "F#4", semis: 42},
  {note: "G4", semis: 43},
  {note: "G#4", semis: 44},
  {note: "A4", semis: 45},
  {note: "A#4", semis: 46},
  {note: "B4", semis: 47},
]

function KeySet() {
  return (
    <>
      {Keys.map(Key => {
        if(Key.note.includes("#")) {
          return(<BlackKey note={Key.note} semis={Key.semis} />)
        } else {
          return(<WhiteKey note={Key.note} semis={Key.semis} />)
        }
      })}
    </>
  )
}

export default KeySet