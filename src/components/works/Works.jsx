import './works.scss'
// import { CiMobile3 } from "react-icons/ci";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GoGlobe, GoClippy } from "react-icons/go";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { useState } from 'react';
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "mobile",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "globe",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "writing",
      title: "Machine Learning",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way)=>{
    
    if(way==='l'){
      if(currentSlide===0) setCurrentSlide(2);
      else setCurrentSlide(currentSlide-1);
    }
    else{
      if(currentSlide===2) setCurrentSlide(0);
      else setCurrentSlide(currentSlide+1);
    }
  }
  
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
        {data.map( (d) => {
          let iconRender;
          if(d.icon === 'mobile') iconRender = <HiOutlineDeviceMobile className='icon'/>;
          else if(d.icon === 'globe') iconRender = <GoGlobe className='icon'/>;
          else iconRender = <GoClippy className='icon' />;
          return (
          <div key= {d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    {iconRender}
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
          )
        })}
        </div>
        <SlArrowLeft className='left arrow' onClick={()=>handleClick('l')} />
        <SlArrowRight className='right arrow' onClick={()=>handleClick('r')}/>
    </div>
  )
}
