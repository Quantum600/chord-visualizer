import * as Tone from "tone";

interface BlackKeyProps {
  note: string
  semis: number
}

function BlackKey(props: BlackKeyProps) {
  const synth = new Tone.Synth().toDestination(); 

  const OnKeyPressed = () => {
    synth.triggerAttack(props.note);
  }

  const OnKeyReleased = () => {
    synth.triggerRelease();
  }

  return (
    <div className="w-0 z-10 flex justify-center overflow-visible">
      <div onMouseDown={OnKeyPressed} onMouseUp={OnKeyReleased} onMouseLeave={OnKeyReleased} className="shrink-0 shadow-2xl shadow-black w-10 h-42 outline-4 outline-black flex justify-center text-lg bg-radial from-neutral-800 to-black rounded-lg mx-0.5 cursor-pointer hover:brightness-125 transition-colors">
        <div className="self-end text-white text-center select-none">
          {props.note}
        </div>
      </div>
    </div>
  )
}

export default BlackKey