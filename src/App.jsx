import React from "react"
import MyImg from "./MyImg"
import './index.css'
import UpperDiv from "./UpperDiv"
import Buttons from "./Buttons"
import LowerDiv from "./LowerDiv"
import Footer from "./Footer"

function App() {

  return (
    <div className="parentDiv">
      <div className="container">
        <MyImg />
        <UpperDiv />
        <Buttons />
        <LowerDiv />
        <Footer />
      </div>
    </div>
  )
}

export default App
