interface BlackKeyProps {
  note: string
  semis: number
}

function BlackKey(props: BlackKeyProps) {

  const OnKeyPressed = () => {
    console.log(props.note + " pressed!")
  }

  return (
    <div className="w-0 z-10 flex justify-center overflow-visible">
      <div onClick={OnKeyPressed} className="shrink-0 w-10 h-42 outline-4 outline-black flex justify-center text-lg bg-black rounded-lg mx-0.5 cursor-pointer">
        <div className="self-end text-white text-center select-none">
          {props.note}
        </div>
      </div>
    </div>
  )
}

export default BlackKey