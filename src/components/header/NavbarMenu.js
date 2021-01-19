import React, { useEffect, useState } from 'react';
import { useFetchAnime, useFetchTopAnime } from '../../hooks/useFetchAnime';
import { useShowContent } from '../../hooks/useShowContent';
// import { Menu } from './Menu';

import './menu.css'
// import { Search } from './Search';
import { SearchInput } from './SearchInput';

export const NavbarMenu = () => {
  const [showContent, toggleShowContent] = useShowContent();
  const [anime, setAnime] = useState('');
  const { data, loading } = useFetchAnime(anime)
  // const [topAnime, setTopAnime] = useState( get )
  const { topData } = useFetchTopAnime()

  useEffect(() => {

  }, [anime])


  // if( !data[0]  === undefined ) {
    //   debugger
    // }
    
    // getFetch()
    // console.log(data, loading)
    console.log(data)
    console.log(topData)
    // debugger
  // debugger
  return (
    <header  >
      <figure className="background--image" style={{ backgroundImage: `url(${topData})` }}>
        
      </figure>
      <nav className="menu__nav container">
        <h3>AnimeApp</h3>
        <div className="right__side__container">
          {
            (!showContent)
              ? <ion-icon 
                name="search-outline"
                onClick={ toggleShowContent }
                >
                </ion-icon>
              : <ion-icon 
                  name="close-outline"
                  onClick={ toggleShowContent }
                >
                </ion-icon>
          }

          <ion-icon name="grid-outline"></ion-icon>
        </div>
      </nav>
      {
        showContent && < SearchInput setAnime={ setAnime }/>
      }
    </header>
  )
}
