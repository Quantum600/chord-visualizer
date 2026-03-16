import * as Tone from "tone";

interface WhiteKeyProps {
  note: string
  semis: number
}

function WhiteKey(props: WhiteKeyProps) {
  const synth = new Tone.Synth().toDestination(); 

  const OnKeyPressed = () => {
    synth.triggerAttack(props.note);
  }

  const OnKeyReleased = () => {
    synth.triggerRelease();
  }

  return (
    <>
      <div onMouseDown={OnKeyPressed} onMouseUp={OnKeyReleased} onMouseLeave={OnKeyReleased} className="w-14 h-70 outline-4 outline-black flex justify-center text-lg bg-white rounded-lg mx-0.5 z-0 cursor-pointer hover:bg-gray-200 transition-colors">
        <div className="self-end select-none">
          {props.note}
        </div>
      </div>
    </>
  )
}

export default WhiteKey