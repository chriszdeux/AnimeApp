import React, { useState } from 'react'
import { CategoryPage } from '../pages/CategoryPage'
// import { useFetchGenreAnime } from '../../hooks/useFetchAnime'
import { dataGenre } from '../../data/dataGenre'
export const AnimeGenreItem = ({genreData}) =>{
  // const [state, setState] = useState(genreData)
  // const { genreTitle } = genreData
  const handleShowInfo = (  ) => {
    // setState(anime)
    // console.log(name)
    // console.log(anime)
  }
  // debugger
  return (
    <ul className="genre__list">
      {
        dataGenre.map(item => (
            <li 
            key={item} 
            className="genre--item"
            onClick={() => handleShowInfo(item)}
            >{ item }</li>
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
