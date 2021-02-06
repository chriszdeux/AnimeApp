import React from 'react';

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
        <img src={image} alt={title}/>
        <h3>{ title }</h3>
      </figure>
      <hr/>
      
      <p className="info--synopsis">{ synopsis }</p>
    </section>
  )
}
