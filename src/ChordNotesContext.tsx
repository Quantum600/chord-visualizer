import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"

export type ChordNotesContextType = [
  string[],
  Dispatch<SetStateAction<string[]>>
]

export const ChordNotesContext = createContext<ChordNotesContextType>([
  [],
  () => {},
])