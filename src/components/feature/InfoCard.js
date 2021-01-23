import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useShowContent } from '../../hooks/useShowContent';

export const InfoCard = ({ anime }) => {

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
    <section className="">
      {/* <IoCloseOutline 
        value={ showContent }
        onClick={ toggleShowContent }
      />  */}
      <img src="" alt=""/>
      <h3>{ title }</h3>
      <div>
        {/* <p>{ score }</p>
        <p>{ genre }</p>
        <p>{ type }</p> */}
      </div>
      <p>{ synopsis }</p>
    </section>
  )
}
