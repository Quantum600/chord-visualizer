interface WhiteKeyProps {
  note: string
  semis: number
}

function WhiteKey(props: WhiteKeyProps) {
  return (
    <>
      <div className="w-14 h-70 outline-4 outline-black flex justify-center text-lg bg-white rounded-lg mx-0.5">
        <div className="self-end">
          {props.note}
        </div>
      </div>
    </>
  )
}

export default WhiteKey