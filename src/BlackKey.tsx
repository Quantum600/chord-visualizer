import * as Tone from "tone";
import { useMemo } from "react";

interface BlackKeyProps {
  note: string
  semis: number
  isActive: boolean
  volume: number
}

function BlackKey(props: BlackKeyProps) {
  const synth = useMemo(() => new Tone.Synth().toDestination(), [])
  synth.volume.value = props.volume

  const PressKey = () => {
    synth.triggerAttack(props.note);
  }

  const ReleaseKey = () => {
    synth.triggerRelease();
  }

  return (
    <div className="w-0 z-10 flex justify-center overflow-visible">
      <div onMouseDown={PressKey} onMouseUp={ReleaseKey} onMouseLeave={ReleaseKey} className = {`shrink-0 w-10 h-42 outline-4 outline-black flex justify-center text-lg ${props.isActive ? "bg-yellow-300" : "bg-radial from-neutral-800 to-black"} rounded-lg mx-0.5 cursor-pointer hover:brightness-125`}>
        <div className="self-end text-white text-center select-none">
          {props.note}
        </div>
      </div>
    </div>
  )
}

export default BlackKey