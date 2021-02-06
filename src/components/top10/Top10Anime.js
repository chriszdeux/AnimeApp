import React from 'react'
import { useFetchTopAnime } from '../../hooks/useFetchAnime';
import { useShowContent } from '../../hooks/useShowContent';
import './top-10-styles.css';

export const Top10Anime = () => {
  const {topData, loading} = useFetchTopAnime();
  const [showContent, toggleShowContent] = useShowContent()
  const top10 = topData.slice(0,10);
  return (
    <section className="top10">
      <h2>Top 10 Anime</h2>
      <ul className="top10__list">
        {
          top10.map(({title, image, url, id}, index) => (
            <li 
              key={id} 
              className="top10__list__item"
            >
              <p>{index + 1}</p>
              <img src={image} alt={title}/>
            </li>
          )
          )
        }
      </ul>
    </section>
  )
}
