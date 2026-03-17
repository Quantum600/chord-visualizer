import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { ChordType } from "./App"

export type ChordContextType = [
  ChordType,
  Dispatch<SetStateAction<ChordType>>
]

export const ChordContext = createContext<ChordContextType>([
  {root: "C", quality: "M"},
  () => {},
])