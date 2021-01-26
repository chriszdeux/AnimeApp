import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useShowContent } from '../../hooks/useShowContent';

export const InfoCard = ( anime ) => {
// debugger
  const [showContent, toggleShowContent] = useShowContent();

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
  // debugger

  return (
    <section className="info__card">
      {/* <IoCloseOutline 
        value={ showContent }
        onClick={ toggleShowContent }
      />  */}
      <figure className="info__card__img">
        <img src={image} alt={title}/>
        <h3>{ title }</h3>
      </figure>
      <hr/>
      <ul className="info__card__gender">
        <p>Genre:</p>
        {
          genre.map(gen => (
            <li> { gen.name }</li>
          ))
        }
      </ul>
      <p>{ synopsis }</p>
    </section>
  )
}
