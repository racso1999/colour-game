
import { useEffect, useState } from "react"

import chroma from "chroma-js"

export default function App() {
  const [colour1, setColour1] = useState("")
  const [colour2, setColour2] = useState("")
  const [colour3, setColour3] = useState("")
  const [colourW, setColourW] = useState("")

  useEffect(() => {randomiseColours()}, [])

  function randomiseColours() {
    setColour1(() => chroma.random().hex())
    setColour2(() => chroma.random().hex())
    setColour3(() => chroma.random().hex())
    const colours = [{colour1}, {colour2}, {colour3}]
    
    setColourW(colours[2])
  }
  return (
  <div>
    <button>
      {colour1}
    </button>
    <button>
      {colour2}
    </button>
    <button>
      {colour3}
    </button>
    <p>
      {colourW}
    </p>
  </div>
  )
}



