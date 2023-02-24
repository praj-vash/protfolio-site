import './portfolio.scss'
import PortfolioList from '../portfolioList/PortfolioList'
import { useEffect, useState } from 'react';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';

export default function Portfolio() {
  const [selected, setSelected] = useState('Featured');
  const [data, setData] = useState([]);
  useEffect(()=>{
    switch(selected){
      case 'Featured': 
        setData(featuredPortfolio);
        break;
      case 'Web App': 
        setData(webPortfolio);
        break;
      case 'Mobile App': 
        setData(mobilePortfolio);
        break;
      case 'Design': 
        setData(designPortfolio);
        break;
      case 'Branding': 
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio)

    }
  },[selected])
  const handleClick = (id)=>{
    // console.log(id);
    setSelected(id);
  }
  const list = [
    {
    id: 'Featured',
    title: 'Featured'
    },
    {
    id: 'Web App',
    title: 'Web App'
    },
    {
    id: 'Mobile App',
    title: 'Mobile App'
    },
    {
    id: 'Design',
    title: 'Design'
    },
    {
    id: 'Branding',
    title: 'Branding'
    },
]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=><PortfolioList key={item.id} onItemClick = {()=>handleClick(item.id)} active = {item.id===selected? 'active':''} item = {item}/>)}
      </ul>
      <div className="container">
        {data.map((d)=>{
          return(
            <div key = {d.id} className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
           </div>
          )
        })}
        
      </div>

    </div>
  )
}
