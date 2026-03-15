import WhiteKey from "./WhiteKey"

interface Key {
  note: string;
  semis: number;
}

const Keys: Key[] = [
  {note: "C4", semis: 36},
  {note: "D4", semis: 38},
  {note: "E4", semis: 40},
  {note: "F4", semis: 41},
  {note: "G4", semis: 43},
  {note: "A4", semis: 45},
  {note: "B4", semis: 47},
  {note: "C5", semis: 48},
]

function KeySet() {
  return (
    <>
      {Keys.map(Key => <WhiteKey note={Key.note} semis={Key.semis} />)}
    </>
  )
}

export default KeySet