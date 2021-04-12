import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// LazyLoadImage
export const InfoCard = ( anime ) => {

    const {
    id,
    title,
    score,
    image,
    genre,
    synopsis,
    type,
    url,
    episodes
  } = anime;

  return (
    <section className="info__card">
      
      <figure className="info__card__img">
        <LazyLoadImage src={image} alt={title}/>
        <h3>{ title }</h3>
      </figure>
      <hr/>
      
      <p className="info--synopsis">{ synopsis }</p>
    </section>
  )
}
