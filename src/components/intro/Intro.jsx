import './intro.scss'
import { IoIosArrowDown} from "react-icons/io";
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay: 500,
      strings: ['Software', 'Frontend', 'Backend'],
    })
  },[])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man4.png" alt="profile" className='pic'/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There! I'm</h2>
          <h1>Prajwal Sharma</h1>
          <h3><span ref={textRef}></span> Developer</h3>
          <a href="#portfolio">
            <IoIosArrowDown className='downIcon'/>
          </a>
        </div>
      </div>
    </div>
  )
}
