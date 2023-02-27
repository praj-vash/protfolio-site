import './testimonial.scss'
import {HiOutlineArrowUturnRight} from 'react-icons/hi2'
import {AiOutlineYoutube} from 'react-icons/ai'
export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  const rendereData = data.map((d)=>{
    return(
        <div className={d.featured ? 'card featured' : 'card'}>
          <div className="top">
              <HiOutlineArrowUturnRight className='left' />
              <img src={d.img} alt="" className='user' />
              <AiOutlineYoutube className='right' />
          </div>
          <div className="center">
              {d.desc}
          </div>
          <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
          </div>
        </div>
    )
  })
  return (

    <div className='testimonial' id='testimonial'>
      <h1>Testimonials</h1>
      <div className="container">
        {/* <div className="card">
          <div className="top">
              <HiOutlineArrowUturnRight className='left' />
              <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className='user' />
              <AiOutlineYoutube className='right' />
          </div>
          <div className="center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum asperiores,
               accusamus architecto tempora voluptatum recusandae. Lorem ipsum dolor sit amet consectetu
               r adipisicing elit. Aut nesciunt facilis cupiditate laborum temporibus.
          </div>
          <div className="bottom">
              <h3>Alex</h3>
              <h4>CEO of GANDU</h4>
          </div>
        </div> */}
        {rendereData}
      </div>
    </div>
  )
}
