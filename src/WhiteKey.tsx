import * as Tone from "tone";

interface WhiteKeyProps {
  note: string
  semis: number
}

function WhiteKey(props: WhiteKeyProps) {
  const synth = new Tone.Synth().toDestination(); 

  const OnKeyPressed = () => {
    console.log(props.note + " pressed!")

    const now = Tone.now();

    synth.triggerAttack(props.note, now);
    synth.triggerRelease(now+0.2);
  }

  return (
    <>
      <div onClick={OnKeyPressed} className="w-14 h-70 outline-4 outline-black flex justify-center text-lg bg-white rounded-lg mx-0.5 z-0 cursor-pointer hover:bg-gray-200 transition-colors">
        <div className="self-end select-none">
          {props.note}
        </div>
      </div>
    </>
  )
}

export default WhiteKey