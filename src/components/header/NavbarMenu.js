import React, { useEffect, useState } from 'react';
import { useFetchAnime, useFetchTopAnime } from '../../hooks/useFetchAnime';
import { useShowContent } from '../../hooks/useShowContent';


import './menu.css'
import { SearchInput } from './SearchInput';


export const NavbarMenu = () => {


  const [showContent, toggleShowContent] = useShowContent();
  const [anime, setAnime] = useState('');
  const { data, loading } = useFetchAnime(anime)
  useEffect(() => {
    
  }, [anime])
  console.log(data)
  
  return (
    <header  >
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

            <ion-icon name="menu-sharp"></ion-icon>
        </div>
      </nav>
      {
        showContent && < SearchInput setAnime={ setAnime }/>
      }
    </header>
  )
}
