import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberComponent from "./memberComponent.jsx"

function App() {

  return (
    <>
      <h1>Team Member Profile</h1>
      <div class="ComponantList">
      <MemberComponent name="Manav Chaudhary" dob="11/10/2004" favFood="Vada Pav" favEmoji="smily" birthPlace="Mehsana"/>
      <MemberComponent name="Khanjan Padaliya" dob="11/01/2005" favFood="Dabeli" favEmoji="Kiss" birthPlace="Talala Gir"/>
      </div>
    </>
  )
}

export default App
