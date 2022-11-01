import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef, useEffect } from "react"
import reactLogo from './assets/react.svg'
import './App.css'
gsap.registerPlugin(ScrollTrigger)
function App() {
  const imgRef = useRef(null)
  useEffect(() => {
    const el = imgRef.current 
    gsap.fromTo(el, {rotation: 0}, {rotation: 180, duration: 3, scrollTrigger: {
      trigger: el
    }})
  }, [])

  return (
    <div className="App">
      
      <div className="helper"></div>
          <img src={reactLogo} className="logo react" alt="React logo" ref={imgRef}/>
       
    </div>
  )
}

export default App
