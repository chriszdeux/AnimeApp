import React from 'react'
import { useFetchTopAnime } from '../../hooks/useFetchAnime'

import './hero-styles.css';

const randomBackground = Math.floor(Math.random() * 50) + 1;
export const Hero = () => {
  const {topData, loading} = useFetchTopAnime()
  const {image, title, url} = !!topData[randomBackground] && topData[randomBackground]
  // debugger
  return (
    <main className="hero">
      <img src={image} alt=""/>
      
      <div>
        <h3>{title}</h3>
        <a href={url} target="_blank">
          <button className="watch--now" >Watch Now</button>
        </a>

      </div>
    </main>
  )
}
