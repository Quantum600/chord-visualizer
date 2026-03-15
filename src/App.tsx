import KeySet from "./KeySet"

function App() {
  return (
    <div className="justify-center items-center flex w-full h-dvh bg-gray-600 font-mono">
      <div className="w-11/12 h-1/2 flex justify-center items-start flex-wrap">
        <KeySet />
        <div className="text-5xl bold w-full text-center">Piano</div>
      </div>
    </div>
  )
}

export default App
