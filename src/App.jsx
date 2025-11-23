import React from 'react'
import {Navbar,Welcome,Dock} from '#components'
import { Terminal,Safari ,Resume,Finder} from '#windows';
import { Draggable } from 'gsap/Draggable';
import gsap from "gsap";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main> 
      <Navbar/>
      <Welcome/>
      <Dock />
      <Terminal />
      <Safari/>
      <Resume/>
      <Finder/>
    </main>
  )
}

export default App
