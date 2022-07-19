import './App.css'
import React, { useEffect, useState } from 'react'
import Mole from './components/mole/Mole.js'

function App() {
  // states
  const [dens, setDens] = useState(getDensState())
  const [points, setPoints] = useState(0)

  // effects
  useEffect(() => {
    startGame()
  }, [])

  // helpers

  //startGame is using setDens on in an interval of every 1.5 seconds to generate new placement for moles 
  function startGame() {
    setInterval(() => {
      setDens(getDensState())
    }, 1500)
  }

  //creates and returns a new Array with 9 objects with isMoleVisible property set to True or False randomly using Math.random()
  function getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }

  // this is using the State Setter for points variable to add 1 point to points variable when image is clicked using this function for onClick passed to the Mole component
  function onMoleWhacked() {
    setPoints(points + 1)
  }

  // renders
  const denElements = dens.map((den, index) => {
    return (
      <Mole key={`mole-${index}`} dens = {den} handleClick= {onMoleWhacked}  />
    )
  })

  console.log(dens);
 

  return (
    <div className="App">
      <h1>WHACK-A-MOLE!</h1>
      <h2>Points: { points }</h2>
      <div className="dens">
        { denElements }
        <div style={{clear: 'both'}}></div>
      </div>
    </div>
  )
}

export default App
