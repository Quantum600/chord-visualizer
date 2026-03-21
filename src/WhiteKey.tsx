import * as Tone from "tone";
import { useCallback, useEffect } from "react";

interface WhiteKeyProps {
  note: string
  semis: number
  isActive: boolean
}

function WhiteKey(props: WhiteKeyProps) {
  const synth = new Tone.Synth().toDestination();

  const PressKey = useCallback(() => {
    synth.triggerAttack(props.note);
  }, [])

  const ReleaseKey = useCallback(() => {
    synth.triggerRelease();
  }, [])

  useEffect(() => {
    if (props.isActive) {
      PressKey();
    } else {
      ReleaseKey()
    }
  }, [props.isActive])

  return (
    <>
      <div onMouseDown={PressKey} onMouseUp={ReleaseKey} onMouseLeave={ReleaseKey} className="w-14 shadow-2xl shadow-black h-70 outline-4 outline-black flex justify-center text-lg bg-radial from-white to-neutral-100 rounded-lg mx-0.5 z-0 cursor-pointer hover:brightness-90 transition-all">
        <div className="self-end select-none">
          {props.note}
        </div>
      </div>
    </>
  )
}

export default WhiteKey