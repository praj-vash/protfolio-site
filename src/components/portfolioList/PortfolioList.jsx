// import { useState } from 'react'
import './portfolioList.scss'

export default function PortfolioList({item, active, onItemClick}) {

  return (
    <li onClick = {onItemClick} className={active}>
        {item.title}
    </li>
  )
}
