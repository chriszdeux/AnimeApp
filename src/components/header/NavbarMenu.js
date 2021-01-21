import React, { useEffect, useState } from 'react';
import { useFetchAnime, useFetchTopAnime } from '../../hooks/useFetchAnime';
import { useShowContent } from '../../hooks/useShowContent';
import { Hero } from '../hero/Hero';
// import { Menu } from './Menu';

import './menu.css'
// import { Search } from './Search';
import { SearchInput } from './SearchInput';


export const NavbarMenu = () => {

  const randomAnime = Math.floor(Math.random() * 49) + 1;

  const [showContent, toggleShowContent] = useShowContent();
  const [anime, setAnime] = useState('');
  const { data, loading } = useFetchAnime(anime)
  // const [topAnime, setTopAnime] = useState( get )
  const { topData } = useFetchTopAnime()

  const { title, image, url } = !!topData[randomAnime] && topData[randomAnime]
  // debugger

  useEffect(() => {
    
  }, [anime])
  
  useEffect(() => {
    
  }, [topData])

  console.log(image)
  console.log(data)
  // debugger
  return (
    <header  >
      {/* <figure className="background--image" style={{ backgroundImage: `url(${topData})` }}>
        
      </figure> */}

      <Hero title={ title } image={ image } url={ url }/>
      

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
