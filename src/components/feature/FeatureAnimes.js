import React from 'react'
import { useFetchSeasonAnime } from '../../hooks/useFetchAnime';
import { AnimeItem } from './AnimeItem';

import './feature-styles.css';
export const FeatureAnimes = () => {
  const { data:animeSeason, loading } = useFetchSeasonAnime()
  // debugger
  return (
    <section className="feature__anime">
      <h2>Feature</h2>
      <ul className="feature__anime__list">
        {
            animeSeason.map(anime => 
              (<AnimeItem  key={anime.id} {...anime}/>)
            )
        }
      </ul>
    </section>
  )
}
