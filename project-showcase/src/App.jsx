import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectShowcase from './components/ProjectShowcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <hr className="my-6" />
      <ProjectShowcase />
      </div>
    </>
  )
}

export default App
