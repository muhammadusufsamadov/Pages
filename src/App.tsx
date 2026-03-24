import  { useRef } from 'react'
const App = () => {
  let inputRef = useRef(null)
  let inputRef2 = useRef(null)
  let inputRef3 = useRef(null)

  return (
    <div>
      <button onClick={() => {
        inputRef.current.scrollIntoView({behavior: "smooth", block: "center"})
      }}>
        Focuc
      </button>
      <div style={{width:"100%", height: "500px"}}></div>
      <div ref={inputRef} style={{width:"100%", height: "500px"}}></div>
      <h1 onClick={() => {inputRef2.current.scrollIntoView({behavior: "smooth", block: "start"})}}>Salom</h1>
      <div ref={inputRef2} style={{width:"100%", height: "500px"}}></div>
      <h1 onClick={() => inputRef3.current.scrollIntoView({behavior: "smooth", block: "end"})}>sjdks</h1>
      <div ref={inputRef3} style={{width:"100%", height: "500px"}}></div>
    </div>
  )
}

export default App
