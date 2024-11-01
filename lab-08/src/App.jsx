import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberComponent from "./memberComponent.jsx"

function App() {

  return (
    <>
      <h1>Team Member Profile</h1>
      <MemberComponent name="Manav Chaudhary" dob="11/10/2004" favFood="Vada Pav" favEmoji="smily" birthPlace="Mehsana"/>
    </>
  )
}

export default App
