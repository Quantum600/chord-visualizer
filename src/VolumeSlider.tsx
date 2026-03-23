import type { Dispatch, SetStateAction } from "react"

interface VolumeSliderProps {
  volume: number,
  setVolume: Dispatch<SetStateAction<number>>
}

function VolumeSlider(props: VolumeSliderProps) {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-wrap mb-5">
      <div className="w-6/12 text-center text-2xl flex flex-wrap justify-center items-center bg-[url(./assets/woodbg.jpg)] bg-cover rounded-md shadow-black shadow-xl">
        <div className="w-full text-center">
          Volume
        </div>
        <input type="range" min={-50} max={0} value={props.volume} onChange={(vol) => props.setVolume(parseInt(vol.target.value))} className="w-11/12 accent-green-400" />
      </div>
    </div>
  )
}

export default VolumeSlider