import * as Tone from "tone";

interface BlackKeyProps {
  note: string
  semis: number
}

function BlackKey(props: BlackKeyProps) {
  const synth = new Tone.Synth().toDestination(); 

  const OnKeyPressed = () => {
    console.log(props.note + " pressed!")

    const now = Tone.now();
    
    synth.triggerAttack(props.note, now);
    synth.triggerRelease(now+0.2);
  }

  return (
    <div className="w-0 z-10 flex justify-center overflow-visible">
      <div onClick={OnKeyPressed} className="shrink-0 w-10 h-42 outline-4 outline-black flex justify-center text-lg bg-black rounded-lg mx-0.5 cursor-pointer hover:bg-neutral-800 transition-colors">
        <div className="self-end text-white text-center select-none">
          {props.note}
        </div>
      </div>
    </div>
  )
}

export default BlackKey