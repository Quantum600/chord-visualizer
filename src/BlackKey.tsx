import * as Tone from "tone";
import { useMemo } from "react";

interface BlackKeyProps {
  note: string
  semis: number
  isActive: boolean
}

function BlackKey(props: BlackKeyProps) {
  const synth = useMemo(() => new Tone.Synth().toDestination(), [])

  const PressKey = () => {
    synth.triggerAttack(props.note);
  }

  const ReleaseKey = () => {
    synth.triggerRelease();
  }

  return (
    <div className="w-0 z-10 flex justify-center overflow-visible">
      <div onMouseDown={PressKey} onMouseUp={ReleaseKey} onMouseLeave={ReleaseKey} className="shrink-0 shadow-2xl shadow-black w-10 h-42 outline-4 outline-black flex justify-center text-lg bg-radial from-neutral-800 to-black rounded-lg mx-0.5 cursor-pointer hover:brightness-125 transition-colors">
        <div className="self-end text-white text-center select-none">
          {props.note}
        </div>
      </div>
    </div>
  )
}

export default BlackKey