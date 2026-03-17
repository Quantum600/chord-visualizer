import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"

export type ChordContexttype = [
  string[],
  Dispatch<SetStateAction<string[]>>
]

export const ChordContext = createContext<ChordContexttype>([
  [],
  () => {},
])