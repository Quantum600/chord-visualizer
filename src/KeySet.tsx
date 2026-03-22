// Components
import WhiteKey from "./WhiteKey"
import BlackKey from "./BlackKey";

// Hooks
import {useContext} from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useMemo } from "react";

// Context
import { ChordContext } from "./ChordContext";
import { PlayChordContext } from "./ChordContext";

// Libraries
import * as Tone from "tone";

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
  const [chord] = useContext(ChordContext)
  const [playChord] = useContext(PlayChordContext)
  const [chordNotes, setChordNotes] = useState([0])

  useEffect(() => {
    const tempChordNotes = []
    // Processing root (switching hell lmao)
    switch (chord.root) {
      case "C":
        tempChordNotes.push(36)
        break;
      case "C#/Db":
        tempChordNotes.push(37)
        break;
      case "D":
        tempChordNotes.push(38)
        break;
      case "D#/Eb":
        tempChordNotes.push(39)
        break;
      case "E":
        tempChordNotes.push(40)
        break;
      case "F":
        tempChordNotes.push(29)
        break;
      case "F#/Gb":
        tempChordNotes.push(30)
        break;
      case "G":
        tempChordNotes.push(31)
        break;
      case "G#/Ab":
        tempChordNotes.push(32)
        break;
      case "A":
        tempChordNotes.push(33)
        break;
      case "A#/Bb":
        tempChordNotes.push(34)
        break;
      case "B":
        tempChordNotes.push(35)
        break;
    }

    if (chord.quality === "M") {
      tempChordNotes.push(tempChordNotes[0] + 4)
      tempChordNotes.push(tempChordNotes[1] + 3)
    }

    setChordNotes(tempChordNotes);
  }, [chord])

  const synth = useMemo(() => new Tone.PolySynth().toDestination(), [])

  if(playChord) {
    synth.releaseAll()
    chordNotes.forEach((note) => {
    const foundNote = Keys.find((key) => {
      return key.semis === note;
    })?.note;

    if(foundNote) {
      synth.triggerAttack(foundNote);
    }
    })
  } else {
    synth.releaseAll()
  }

  return (
    <>
      {Keys.map(Key => {
        // If the key is a sharp/flat, map it as a black key, otherwise, its a white key
        if(Key.note.includes("#")) {
          return(<BlackKey key={Key.semis.toString()} note={Key.note} semis={Key.semis} isActive={playChord && (chordNotes.includes(Key.semis))} />)
        } else {
          return(<WhiteKey key={Key.semis.toString()} note={Key.note} semis={Key.semis} isActive={playChord && (chordNotes.includes(Key.semis))} />)
        }
      })}
    </>
  )
}

export default KeySet