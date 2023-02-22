import './topbar.scss'
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

export default function Topbar({handlehamburger, classnm}) {
  return (
    <div className = {'topbar '+classnm} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>develop.</a>
          <div className="itemContainer">
            <BsFillPersonFill className='icon'/>
            <span>+91 9932004445</span>
          </div>
          <div className="itemContainer">
            <IoIosMail className='icon'/>
            <span>pvashisth2000@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handlehamburger}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
