import React, { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/solutions')
      .then((res) => res.json())
      .then((data) => {
        const randomSolution = data[Math.floor(Math.random() * data.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])
  return (
    <div className='App'>
      <h1>birdle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App
