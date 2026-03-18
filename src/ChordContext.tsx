import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type { ChordType } from "./App"

export type ChordContextType = [
  ChordType,
  Dispatch<SetStateAction<ChordType>>
]

export type PlayChordContextType = [
  boolean,
  Dispatch<SetStateAction<boolean>>
]

export const ChordContext = createContext<ChordContextType>([
  {root: "C", quality: "M"},
  () => {},
])

export const PlayChordContext = createContext<PlayChordContextType>([false, () => {}])