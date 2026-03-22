import * as Tone from "tone";

import { useMemo } from "react";

interface WhiteKeyProps {
  note: string
  semis: number
  isActive: boolean
}

function WhiteKey(props: WhiteKeyProps) {
  const synth = useMemo(() => new Tone.Synth().toDestination(), [])

  function PressKey() {
    synth.triggerAttack(props.note);
  }

  function ReleaseKey() {
    synth.triggerRelease();
  }

  return (
    <>
      <div onMouseDown={PressKey} onMouseUp={ReleaseKey} onMouseLeave={ReleaseKey} className = {`w-14 shadow-2xl shadow-black h-70 outline-4 outline-black flex justify-center text-lg ${props.isActive ? "bg-yellow-300" : "bg-radial from-white to-neutral-100"} rounded-lg mx-0.5 z-0 cursor-pointer hover:brightness-90`}>
        <div className="self-end select-none">
          {props.note}
        </div>
      </div>
    </>
  )
}

export default WhiteKey