import React from 'react';
import './hero-style.css';

export const Hero = ( {title, image, url } ) => {

  return (
    <main className="hero" >      
      <figure className="hero__background">
        <img src={ image } alt=""/>
      </figure>
      <h3>{ title }</h3>
      <form action={ url } target="_blank">
        <button className="watch--now">Watch Now</button>
      </form>
    </main>
  )
}
