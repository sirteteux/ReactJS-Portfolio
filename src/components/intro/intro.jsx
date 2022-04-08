import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function intro() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textRef = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [" Graduate"," Developer", " Designer"],
    });
  },[])

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/andreas.jpg" alt=""/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi, I am</h2>
            <h1>Andreas.</h1>
            <h3>I am a <span ref={textRef}></span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}
