import React, { useState } from 'react'
import { CategoryPage } from '../pages/CategoryPage'
// import { useFetchGenreAnime } from '../../hooks/useFetchAnime'

export const AnimeGenreItem = ({genreData}) =>{
  const [state, setState] = useState(genreData)
  // const { genreTitle } = genreData
  const handleShowInfo = ( anime, name ) => {
    setState(anime)
    console.log(name)
    console.log(anime)
  }
  // debugger
  return (
    <ul className="genre__list">
      {
        genreData.map(({mal_url:{name, mal_id}, anime}) => (
            <li 
            key={mal_id} 
            className="genre--item"
            onClick={() => handleShowInfo(anime, name)}
            >{ name }</li>
            // <CategoryPage />
        ))
      }
      {/* {
        genreData.map((genre, i) => (
          // const {mal_url:{name}} = genre;
        ))
      } */}
    </ul>
  )
}
