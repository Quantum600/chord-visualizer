import * as Tone from "tone";

interface WhiteKeyProps {
  note: string
  semis: number
}

function WhiteKey(props: WhiteKeyProps) {
  const synth = new Tone.Synth().toDestination(); 

  const PressKey = () => {
    synth.triggerAttack(props.note);
  }

  const ReleaseKey = () => {
    synth.triggerRelease();
  }

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